from django.db import models


class Record(models.Model):
    class Meta:
        db_table = "record"
        ordering = ['id']

    id = models.AutoField(primary_key=True)
    text = models.TextField(null=False)

    def __str__(self) -> str:
        return self.id
