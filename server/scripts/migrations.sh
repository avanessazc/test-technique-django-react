python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py loaddata ./data/records.json
python3 manage.py runserver 0.0.0.0:8000