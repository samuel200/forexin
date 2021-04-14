from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate
from django.core.mail import EmailMessage
from django.conf import settings
# from django_template_loader import render_to_string

from api.models import UserDetails
from .models import SiteInformation, Employee, InvestmentPlan, LastTransaction

import random

def index(request):
    last_investments = LastTransaction.objects.all()
    investments = InvestmentPlan.objects.all()
    employees = Employee.objects.all()
    site_information = SiteInformation.objects.all().last()
    return render(request, "index.htm", {"site_information": site_information, "employees": employees, "investments": investments, "last_investments": last_investments})

def about(request):
    site_information = SiteInformation.objects.all().last()
    return render(request, "index3898.htm", {"site_information": site_information})

def news(request):
    site_information = SiteInformation.objects.all().last()
    return render(request, "index56ca.htm", {"site_information": site_information})

def faq(request):
    site_information = SiteInformation.objects.all().last()
    return render(request, "index38cd.htm", {"site_information": site_information})

def affiliate(request):
    site_information = SiteInformation.objects.all().last()
    return render(request, "index9c68.htm", {"site_information": site_information})

def contact(request):
    site_information = SiteInformation.objects.all().last()
    return render(request, "index15a0.htm", {"site_information": site_information})

def terms(request):
    site_information = SiteInformation.objects.all().last()
    return render(request, "indexa972.htm", {"site_information": site_information})

def privacy(request):
    site_information = SiteInformation.objects.all().last()
    return render(request, "indexe8ae.htm", {"site_information": site_information})

def signin(request):
    site_information = SiteInformation.objects.all().last()

    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        try:
            username = User.objects.get(email=email).username
            user = authenticate(request, username=username, password=password)
            if user is not None:
                try:
                    login(request, user)
                    return redirect(reverse('backend:dashboard', kwargs={"username": user.username}))
                except Exception as e:
                    return render(request, "indexc30b.htm", {'error_message': 'login error'.capitalize(), "site_information": site_information})

            else:
                return render(request, "indexc30b.htm", {'error_message': 'Invalid Email Or Password'.capitalize(), "site_information": site_information})

        except Exception as e:
            return render(request, "indexc30b.htm", {'error_message': 'user with the email provided does not exist'.capitalize(), "site_information": site_information})

    return render(request, "indexc30b.htm")

def generate_random_id():
    return str(random.randint(100000, 999999))

def register(request):
    site_information = SiteInformation.objects.all().last()
    if request.method == 'POST':
        user_values = {
            "username": request.POST.get('username') + generate_random_id(),
            "first_name": request.POST.get('first_name'),
            "last_name": request.POST.get('last_name'),
            "email": request.POST.get('email'),
            "password": request.POST.get('password'),
            "confirm_password": request.POST.get("password2")
        }

        try:
            user = User.objects.get(email=user_values['email'])
            return render(request, "indexcca3.htm", {"error_message": "User with the given email already exists".capitalize(), "site_information": site_information})
        
        except Exception as e:
            if(user_values['password'] == user_values['confirm_password']):
                user = User(username=user_values['username'], 
                            email=user_values["email"], 
                            first_name=user_values.get('first_name'), 
                            last_name=user_values.get('last_name')) 
                user.set_password(user_values["password"])
                user.save()
            
                user_details = UserDetails(phone_number= request.POST.get("phone_number"),
                                            bitcoin_address= request.POST.get("wallet"),
                                            user= user)
                user_details.save()
                return render(request, "indexcca3.htm", {"success_message": "Registration Successful", "site_information": site_information})
            else:
                return render(request, "indexcca3.htm", {"error_message": "Passwords do not match".capitalize(), "site_information": site_information})

    return render(request, "indexcca3.htm", {"site_information": site_information})

def referral_register(request, username):
    site_information = SiteInformation.objects.all().last()
    if request.method == 'POST':
        user_values = {
            "username": request.POST.get('username') + generate_random_id(),
            "first_name": request.POST.get('first_name'),
            "last_name": request.POST.get('last_name'),
            "email": request.POST.get('email'),
            "password": request.POST.get('password'),
            "confirm_password": request.POST.get("password2")
        }

        try:
            user = User.objects.get(email=user_values['email'])
            return render(request, "indexcca3.htm", {"error_message": "User with the given email already exists".capitalize(), "site_information": site_information})
        
        except Exception as e:
            if(user_values['password'] == user_values['confirm_password']):
                user = User(username=user_values['username'], 
                            email=user_values["email"], 
                            first_name=user_values.get('first_name'), 
                            last_name=user_values.get('last_name')) 
                user.set_password(user_values["password"])
                user.save()

                referral = User.objects.get(username=username)

                user_details = UserDetails(phone_number= request.POST.get("phone_number"),
                                            bitcoin_address= request.POST.get("wallet"),
                                            referree=referral,
                                            user= user)
                user_details.save()
                return render(request, "indexcca3.htm", {"success_message": "Registration Successful", "site_information": site_information})
            else:
                return render(request, "indexcca3.htm", {"error_message": "Passwords do not match".capitalize(), "site_information": site_information})

    return render(request, "indexcca3.htm", {"site_information": site_information})

# def send_email(request):
#     msg = EmailMultiAlternatives('subject', 'text_content', EMAIL_HOST_USER, ['EMAIL LIST'])
#     msg.attach_alternative(html, "text/html")
#     msg.send()
#     return HttpResponse("email sent!!!")

@login_required(login_url="backend:login")
def dashboard_view(request, username):
    return render(request, "index.html", {})

def logout_view(request):
    logout(request)
    return redirect(reverse("backend:login"))





