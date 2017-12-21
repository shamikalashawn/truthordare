#LogReg
# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
import bcrypt, re

NAMEREG = re.compile(r'^[a-zA-Z.-]*$')

class userDBManager(models.Manager):
    def check_create(self, data):
        errors = []
        if len(data['username']) < 2:
            errors.append(['username', "Username must be at least two characters in length."])
        if not re.match(NAMEREG, data['username']):
            errors.append(['username', 'Username must only include letters and "-" or "." please.'])
        if len(data['password']) < 8:
            errors.append(['password', 'Password must be at least 8 characters.'])
        if len(data['confirmpass']) < 8 or data['confirmpass'] != data['password']:
            errors.append(['confirmpass', 'Password confirmation must be entered and match password.'])
        if errors:
            return [False, errors]
        else:
            user_check = userDB.objects.filter(username=data['username'])
            if user_check:
                errors.append(['user_check', 'Unable to register, please use alternate username.'])
                return [False, errors]
            else:
                newUser = userDB(username=data['username'])
            hashed_pass = bcrypt.hashpw(data['password'].encode(), bcrypt.gensalt())
            newUser.password = hashed_pass
            newUser.save()
            return [True, newUser]

    def check_login(self, data):
        errors = []
        if len(data['password']) < 8:
            errors.append(['password', 'Password must be at least 8 characters.'])
        if errors:
            return [False, errors]
        else:
            check_user = userDB.objects.filter(username=data['username'])
            print('check_user data: ', check_user)
            if not check_user:
                errors.append(['login', "Username or password not correct.  Please try again."])
            if not bcrypt.checkpw(data['password'].encode(), check_user[0].password.encode()):
                errors.append(['login', "Username or password not correct.  Please try again."])
            if errors:
                return [False, errors]
            else:
                user = check_user[0]
                print('user name and password correct: ', user)
                return [True, user]

#edit user methods

#edit user info
    def check_info_edit(self, data, id):
        errors = []
        if len(data['username']) < 2:
            errors.append(['username', "Username must be at least two characters in length."])
        if not re.match(NAMEREG, data['username']):
            errors.append(['username', 'Username must only include letters and "-"  or "." please.'])
        if errors:
            return [False, errors]
        else:
            edit_user = userDB.objects.get(id=id)
            if data['username'] != edit_user.username:
                username_check = userDB.objects.filter(username=data['username'])
                if username_check:
                    errors.append(['username_check', 'Unable to edit, please choose alternate username.'])
                    return [False, errors]
            edit_user.username = data['username']
            edit_user.save()
            return [True]

#update user password
    def check_pwd_edit(self, data, id):
        errors = []
        if len(data['password']) < 8:
            errors.append(['password', 'Password must be at least 8 characters.'])
        if len(data['confirmpass']) < 8 or data['confirmpass'] != data['password']:
            errors.append(['confirmpass', 'Password confirmation must be entered and match password.'])
        if errors:
            return [False, errors]
        else:
            edit_user = userDB.objects.get(id=id)
            hashed_pass = bcrypt.hashpw(data['password'].encode(), bcrypt.gensalt())
            edit_user.password = hashed_pass
            edit_user.save()
            return [True]


class userDB(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return 'ID: %s | Username: %s | Password: %s' % (self.id, self.username, self.password)
    objects = userDBManager()
# Create your models here.
