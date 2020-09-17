# Generated by Django 3.0.8 on 2020-09-14 09:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0017_auto_20200908_0451'),
    ]

    operations = [
        migrations.AlterField(
            model_name='food',
            name='photo',
            field=models.ImageField(null=True, upload_to='food/photos/main/', verbose_name='Food image '),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='photo',
            field=models.ImageField(null=True, upload_to='resturant/photos/main', verbose_name='Restaurant image '),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='photos',
            field=models.ManyToManyField(blank=True, to='api.Photos', verbose_name='Restaurant photos'),
        ),
    ]