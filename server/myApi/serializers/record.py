from django.db import models
from rest_framework import serializers
from ..models import Record


class RecordSerializer(serializers.Serializer):

    id = serializers.IntegerField(read_only=True)
    text = serializers.CharField(required=True)

    def create(self, validated_data):
        return Record.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.text = validated_data.get('text', instance.text)
        instance.save()
        return instance
