from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(SiteInformation)
admin.site.register(Employee)
admin.site.register(InvestmentPlan)
admin.site.register(LastTransaction)