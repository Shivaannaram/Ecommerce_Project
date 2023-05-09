from django.urls import path
from ecommerceapp import views
urlpatterns = [
    path('hello/', views.hello),
    path('addProduct/',views.addProduct),
    path('UpdateProduct/<id>',views.UpdateProduct),
    path('DeleteProduct/<id>',views.DeleteProduct),
#----------------------------------------------------------------------------
# Serializers
    path('getProductsSer/',views.getProductsSer),
    path('addProductSer/',views.addProductSer),
    path('UpdateProductSer/<pk>',views.UpdateProductSer),
    path('DeleteProductSer/<pk>',views.DeleteProductSer),
#----------------------------------------------------------------------------
# Class Based Api
    path('RegisterApi/',views.RegisterApi.as_view()),

#---------------------------------------------------------------------------
    path('LoginUser/',views.LoginUser),
]