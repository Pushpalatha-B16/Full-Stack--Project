
from rest_framework import viewsets
from .models import Products
from .serializers import Productserializer
from rest_framework.parsers import MultiPartParser, FormParser
# Create your views here.

class Productviewset(viewsets.ModelViewSet):
    queryset=Products.objects.all()
    serializer_class=Productserializer
    parser_classes = [MultiPartParser, FormParser]
    
      