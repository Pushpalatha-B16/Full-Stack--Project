from django.shortcuts import render,redirect
from .models import Datas

# Create your views here.
#st=Datas.objects.all
def home(request):
    mydata=Datas.objects.all()
    if(mydata):
          return render(request,'home1.html',{'data':mydata})
    else:
        return render(request,'home.html')
def add(request):
     if request.method=="POST":
        name=request.POST["name"]   #---------- here variable name is your wish,["name"] ----it should be same html name="name"
        age=request.POST["age"]
        mail=request.POST["mail"]
        city=request.POST["city"]
        mobile=request.POST["mobile"]
        degree=request.POST["degree"]
       
        obj=Datas()
        obj.Name=name
        obj.Age=age
        obj.city=city
        obj.Mobile=mobile
        obj.Degree=degree
        obj.Email=mail
        obj.save()
        mydata=Datas.objects.all()
        return redirect("home_data")
     return render(request,'home.html')
def update(request,id):
    mydata=Datas.objects.get(id=id)
    if request.method=="POST":
        name=request.POST["name"]   #---------- here variable name is your wish,["name"] ----it should be same html name="name"
        age=request.POST["age"]
        mail=request.POST["mail"]
        city=request.POST["city"]
        mobile=request.POST["mobile"]
        degree=request.POST["degree"]

        mydata.Name=name
        mydata.Age=age
        mydata.city=city
        mydata.Mobile=mobile
        mydata.Degree=degree
        mydata.Email=mail
        mydata.save()
        return redirect("home_data")

    return render(request,"update.html",{'data':mydata})
def delete(request,id):
    mydata=Datas.objects.get(id=id)
    mydata.delete()
    return redirect('home_data')