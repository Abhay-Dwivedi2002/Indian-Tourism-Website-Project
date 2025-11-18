from django.urls import path,include
from . import views 


urlpatterns = [
    path("northIndia/",views.northIndia , name= "northIndia"),
    path("southIndia/",views.southIndia , name= "southIndia"),
    path("eastIndia/",views.eastIndia , name= "eastIndia"),
    path("westIndia/",views.westIndia , name= "westIndia"),
    path("centralIndia/",views.centralIndia , name= "centralIndia"),
    path("unionterritories/",views.unionterritories , name= "unionterritories"),


]


