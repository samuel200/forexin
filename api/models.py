from django.db import models
from django.contrib.auth.models import User

from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

from django.utils import timezone

class UserDetails(models.Model):
    country = models.TextField(null=True)
    phone_number = models.CharField(max_length=20)
    bitcoin_address = models.TextField(null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="details")
    investment_balance = models.FloatField(null=True, blank=True, default=0)
    referral_earnings = models.FloatField(null=True, blank=True, default=0)
    account_balance = models.FloatField(null=True, blank=True, default=0)
    referree = models.ForeignKey(User, null=True, blank=True, on_delete=models.DO_NOTHING, related_name="referrals")

    def calculate_referral_earnings(self, instance):
        referrals = instance.user.referrals.all()

        if len(referrals) < 0:
            self.referral_earnings = 0

        else:
            referral_earnings = 0
            for referral in referrals:
                referral_earnings += referral.investment_balance

            self.referral_earnings = referral_earnings

    @property
    def referrals(self):
        return self.user.referrals.all().count()

    def __str__(self):
        return self.user.username
        

class Withdrawal(models.Model):
    method = models.CharField(max_length=20)
    ammount = models.IntegerField()
    date = models.DateTimeField()
    active = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="withdrawals")

    def __str__(self):
        return f"{self.user.username}   {self.date}"

class Deposit(models.Model):
    method = models.CharField(max_length=20)
    ammount = models.IntegerField()
    date = models.DateTimeField()
    active = models.BooleanField(default=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="deposit")

    def __str__(self):
        return f"{self.user.username}           {self.date}"

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)