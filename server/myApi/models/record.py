from django.db import models


class Record(models.Model):
    class Meta:
        db_table = "record"

    id = models.AutoField(primary_key=True)
    text = models.TextField(null=False, max_length=1000)

    def __str__(self) -> str:
        return self.id
