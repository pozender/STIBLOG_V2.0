# Generated by Django 4.1.1 on 2022-09-25 14:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='articles',
            name='article',
            field=models.TextField(blank=True),
        ),
    ]