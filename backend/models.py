from django.db import models

# Create your models here.
class SiteInformation(models.Model):
    phone_number = models.CharField(max_length=20)
    company_address = models.CharField(max_length=200)
    company_number = models.CharField(max_length=15)
    company_start_time = models.CharField(max_length=50)
    amount_invested = models.IntegerField()
    amount_paidout = models.IntegerField()
    investors = models.IntegerField()
    amount_invested_last = models.IntegerField()
    amount_paidout_last = models.IntegerField()
    site_wallet_address = models.CharField(max_length=50, null=True, blank=True)

    def __str__(self):
        return "Site Information"

class Employee(models.Model):
    name = models.CharField(max_length=200)
    position = models.CharField(max_length=200)
    picture = models.ImageField(upload_to="employees")

    def __str__(self):
        return self.name

class InvestmentPlan(models.Model):
    percentages = models.IntegerField()
    days = models.IntegerField()
    min_amount = models.FloatField()
    max_amount = models.FloatField()

    def __str__(self):
        return f"{self.min_amount} - {self.max_amount}"

transaction_choices = (('d', "deposit"), ('w', 'withdrawal'))

class LastTransaction(models.Model):
    transaction_type = models.CharField(max_length=20, choices=transaction_choices)
    name = models.CharField(max_length=200)
    amount = models.IntegerField()
    date = models.DateTimeField()

    def __str__(self):
        return self.name