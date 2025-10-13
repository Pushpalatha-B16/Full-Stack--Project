from django.db import models

# Create your models here.
class Products(models.Model):
    product_name=models.CharField( max_length=50)
    product_price=models.IntegerField()
    product_picture=models.ImageField(upload_to='images/',blank=True,null=True)
    product_details=models.TextField()

    def __str__(self):
        return self.product_name
