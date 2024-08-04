from django.urls import path,include
from .views import TableViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'tableapi', TableViewSet, basename='user')
urlpatterns = router.urls
urlpatterns = [
    path('',include (router.urls)),
    
]