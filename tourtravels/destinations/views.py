from django.http import HttpResponse
from django.shortcuts import render
# Create your views here.





def northIndia(request):
    # return HttpResponse("North India")
    return render(request , "northIndia.html")


def southIndia(request):
    return render(request , "southIndia.html")


def eastIndia(request):
    return render(request , "eastIndia.html")


def westIndia(request):
    return render(request , "westIndia.html")


def centralIndia(request):
    return render(request , "centralIndia.html")


def unionterritories(request):
    return render(request , "unionterritories.html")


