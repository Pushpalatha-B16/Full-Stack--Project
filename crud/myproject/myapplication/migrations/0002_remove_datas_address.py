# Generated by Django 5.1.3 on 2024-12-06 01:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapplication', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='datas',
            name='Address',
        ),
    ]
