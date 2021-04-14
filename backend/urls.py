from django.urls import path
from .views import *

app_name = "backend"

urlpatterns = [
    path('', index, name="index"),
    path('about', about, name="about"),
    path('news', news, name="news"),
    path('faq', faq, name="faq"),
    path('affiliate', affiliate, name="affiliate"),
    path('contact', contact, name="contact"),
    path('terms', terms, name="terms"),
    path('privacy', privacy, name="privacy"),
    path('login', signin, name="login"),
    path('logout', logout_view, name="logout"),
    path('register', register, name="register"),
    path('register/<str:username>', referral_register, name="register"),
    path('dashboard/<str:username>/', dashboard_view, name="dashboard"),
]
