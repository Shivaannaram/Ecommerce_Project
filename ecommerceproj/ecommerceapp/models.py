from django.db import models

# Create your models here.

class Products(models.Model):
    name=models.CharField(max_length=100)
    price=models.IntegerField()
    description=models.CharField(max_length=500)
    imageUrl=models.CharField(max_length=500)
    quantity=models.IntegerField()
    seller=models.CharField(max_length=100)

    class Meta:
        db_table="Products"

    def __str__(self):
        return self.name


class Register(models.Model):
    username=models.CharField(max_length=50)
    password=models.CharField(max_length=50)
    email=models.CharField(max_length=50)
    role=models.CharField(max_length=20,blank=True)

    class Meta:
        db_table="Register"
    
    def __str__(self):
        return self.username