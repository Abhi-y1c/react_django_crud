from django.db import models

# Create your models here.
class Table(models.Model):
    name=models.CharField(max_length=20)
    age=models.IntegerField()
    city=models.CharField(max_length=10)
    sallary=models.IntegerField()
