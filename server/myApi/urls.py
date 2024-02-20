from django.urls import path
from .views import RecordAPIView

urlpatterns = [
    path("record/", RecordAPIView.as_view(), name="record"),
    path("record/<int:pk>/", RecordAPIView.as_view(), name="record-detail"),
]
