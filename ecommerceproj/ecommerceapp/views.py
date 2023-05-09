from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def hello(request):
    return HttpResponse("Helloworld")


from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Products

@api_view(['GET','POST'])
def addProduct(request):
    if request.method=="GET":
        data=Products.objects.all()
        # import pdb; pdb.set_trace()
        print(data)
        converted=data.values()
        return Response(
            {
                "Products":converted
            }
        )
    elif request.method=="POST":
        data=request.data
        data={ele:value for ele,value in data.items()}
        # import pdb; pdb.set_trace()
        Products.objects.create(**data)
        return Response(
            {
                "message":"Product Added"
            }
        )

@api_view(['PUT'])
def UpdateProduct(request,id):
    if request.method=="PUT":
        data=request.data
        data={ele:value for ele,value in data.items()}
        id=Products.objects.filter(id=id)
        id.update(**data)
        return Response(
            {
                "message":"Product Updated Successfully"
            }
        )
        
@api_view(["GET","DELETE"])
def DeleteProduct(request,id):
    if request.method=="GET":
        data=Products.objects.filter(id=id)
        convert=data.values()
        return Response(
            {
                "Product":convert
            }
        )

    elif request.method=="DELETE":
        id=Products.objects.filter(id=id)
        id.delete()
        return Response(
            {
                "message":"Product Deleted"
            }
        )

#-----------------------------------------------------------------------------------
# Serializers
from .serializers import ProductsSerializer

@api_view(["GET"])
def getProductsSer(request):
    if request.method=="GET":
        data=Products.objects.all()
        serializer=ProductsSerializer(data,many=True)
        return Response({
            "Products":serializer.data
        })
@api_view(["POST"])
def addProductSer(request):
    if request.method=="POST":
        data=request.data
        data={ele:value for ele,value in data.items()}
        serializer=ProductsSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({
            "message":"Product Added"
        })

@api_view(["GET","PUT"])
def UpdateProductSer(request,pk):
    if request.method=="GET":
        data=Products.objects.get(id=pk)
        
        # import pdb; pdb.set_trace()
        serializer=ProductsSerializer(data)
        return Response({
            "message":"Product",
            "Product":serializer.data
        })
    elif request.method=="PUT":
        id=Products.objects.get(id=pk)
        data=request.data
        data={ele:value for ele,value in data.items()}
        serializer=ProductsSerializer(id,data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({
            "message":"Product Updated"
        })


@api_view(["GET","DELETE"])
def DeleteProductSer(request,pk):
    if request.method=="GET":
        id=Products.objects.get(id=pk)
        serializer=ProductsSerializer(id)
        return Response({
            "Product":serializer.data
        })
    elif request.method=="DELETE":
        data=Products.objects.get(id=pk)
        data.delete()
        return Response(
            {
                "message":"Product Deleted"
            }
        )

#----------------------------------------------------------------------------------
# Class based Api Serializers for Register User

from rest_framework.views import APIView
from .models import Register
from .serializers import RegisterSerializer

class RegisterApi(APIView):

    def get(self,request):
        data=Register.objects.all()
        serializer=RegisterSerializer(data,many=True)
        return Response({
            "Users":serializer.data
        })
    def post(self,request):
        data=request.data
        data={ele:value for ele,value in data.items()}
        serializer=RegisterSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
        return Response({
            "User":serializer.data
        })



from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET','POST'])
def LoginUser(request):
    if request.method=="GET":
        data=Register.objects.all()
        convert=data.values()
        return Response({
            "Users":convert
        })
    elif request.method=="POST":
        data=request.data
        usern=data['username']
        passw=data['password']
        userdata=Register.objects.all()
        for ele in userdata.values():
            # print(ele)
            if ele['username']==usern and ele['password']==passw:
                # print("Login Success")
                return Response({
                    "role":ele['role'],
                    "message":"Login Success"
                })
        else:
            return Response({
                "message":"Login Failed"
            })

            
        # import pdb; pdb.set_trace()
