from rest_framework import serializers
from todos.models import Todo


class TodoSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(required=False, allow_blank=True, max_length=100)
    description = serializers.CharField(required=False, allow_blank=True, max_length=100)

    def create(self, validated_data):
        """
        Create and return a new `todo` instance, given the validated data.
        """
        return Todo.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Todo` instance, given the validated data.
        """
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.save()
        return instance