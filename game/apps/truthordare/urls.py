from django.conf.urls import url
from . import views

app_name = 'truthordare'
urlpatterns = [
    url(r'^truthordare/friendly', views.friendly, name='friendly'),
    url(r'^truthordare/adult', views.adult, name='adult'),
]
