# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.

def adult(request):
    return render(request, 'truthordare/adult.html')

def friendly(request):
    return render(request, 'truthordare/friendly.html')
