from django.urls import path
from . import views

urlpatterns = [

    path('project/<str:pk>/', views.project, name='project'),
    path('', views.projects, name='projects'),
    path('create-project/', views.createProject, name='create-project'),
]
