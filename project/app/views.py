from django.shortcuts import render
from .serializers import TableSerializer
from rest_framework import viewsets
from .models import *
# Create your views here.


class TableViewSet(viewsets.ModelViewSet):
    """
    A viewset that provides the standard actions
    """
    queryset = Table.objects.all()
    serializer_class = TableSerializer