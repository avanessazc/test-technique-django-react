FROM python:3.12-rc-alpine3.16

WORKDIR /usr/src/app

# https://devpress.csdn.net/python/62fd1e57c677032930802c35.html
RUN apk add --no-cache postgresql-libs && \
    apk add --no-cache gcc musl-dev postgresql-dev && \
    apk add libffi-dev && \
    apk add --no-cache black

RUN pip install --upgrade pip

COPY requirements.txt ./
# pip freeze > requirements.txt
RUN pip install -r requirements.txt

# Creating a project
# django-admin startproject <project name>

# Creating the Polls app
# python3 manage.py startapp <app name>

# Run the server
# python3 manage.py runserver 0.0.0.0:8000

# python3 manage.py makemigrations

# python3 manage.py migrate

# python3 manage.py loaddata <path_to_json_file>

# python manage.py createsuperuser

# python3 -m pip freeze > requirement.txt

# black ./**/*.py

# django-admin makemessages -l en

# django-admin compilemessages --ignore venv

# python3 manage.py test --keepdb ex --verbosity 2