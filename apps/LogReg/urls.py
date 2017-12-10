#LogReg
from django.conf.urls import url
from . import views

app_name = 'LogReg'
urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^register$', views.log_reg, name="register"),
    url(r'^login$', views.log_reg, name="login"),
    url(r'^logout$', views.logout, name="logout"),
]
