from django.db import models

# Create your models here.
class Datas(models.Model):
    Name=models.CharField(max_length=20,default="")
    Age=models.IntegerField(default="")
    Email=models.CharField(max_length=20,default="")
    city=models.CharField(max_length=20,default="")
    Mobile=models.IntegerField(default="")
    Degree=models.CharField(max_length=10,default="")

    def __str__(self):
            return self.Name
