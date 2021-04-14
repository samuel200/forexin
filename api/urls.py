from django.urls import path
# from rest_framework.authtoken import views
from .views import *

urlpatterns = [
    path("user/", UserView.as_view()),
    path("change_password/", ChangePasswordView.as_view()),
    path("change_account_details/", ChangeAccountDetailsView.as_view()),
    path("withdraw_request/", WithdrawRequestView.as_view()),
    path("deposit_request/", DepositRequestView.as_view()),
    path("obtain_token/<str:username>", TokenRequestView.as_view()),
    # path("api-token-auth/", views.obtain_auth_token)
]