from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Record
from .serializers import RecordSerializer


class RecordAPIView(APIView):
    def get_object(self, pk):
        try:
            instance = Record.objects.get(pk=pk)
            return instance
        except Record.DoesNotExist:
            return None

    def get(self, request, pk=None, *args, **kwargs):
        if pk is not None:
            instance = self.get_object(pk)
            if instance is None:
                return Response(
                    {"error": "Record not found"}, status=status.HTTP_404_NOT_FOUND
                )
            serializer = RecordSerializer(instance)
            return Response(serializer.data)
        else:
            objects = Record.objects.all()
            serializer = RecordSerializer(objects, many=True)
            return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = RecordSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk):
        try:
            instance = Record.objects.get(pk=pk)
        except Record.DoesNotExist:
            return Response(
                {"error": "Record not found"}, status=status.HTTP_404_NOT_FOUND
            )
        serializer = RecordSerializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            instance = Record.objects.get(pk=pk)
        except Record.DoesNotExist:
            return Response(
                {"error": "Record not found"}, status=status.HTTP_404_NOT_FOUND
            )
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
