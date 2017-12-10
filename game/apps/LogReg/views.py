#LogReg
# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.contrib import messages
from django.shortcuts import render, redirect
from .models import userDB

# Create your views here.

#displays home page
def home(request):
    return render(request, 'LogReg/index.html')

#registers or logs in user unless error occurs
def log_reg(request):
    if request.method == "POST":
        if request.POST['attempt'] == "register":
            response = userDB.objects.check_create(request.POST)
        elif request.POST['attempt'] == 'login':
            response = userDB.objects.check_login(request.POST)
        if not response[0]:
            for error in response[1]:
                messages.error(request, error[1])
                return redirect('logreg:home')
        else:
            request.session['user'] = {
                'username': response[1].username,
                'id': response[1].id,
            }
        return redirect('truthordare:friendly')
    return redirect('logreg:home')

#logs out user
def logout(request):
    request.session.clear()
    return redirect('logreg:home')
