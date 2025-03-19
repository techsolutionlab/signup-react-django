# Signup API with Django REST Framework

## Project Description

This project provides an API for user signup functionality built using Django REST Framework (DRF). The API allows users to register an account by submitting their details and handles proper responses and status codes.

## Prerequisites

Before running the project, ensure you have the following installed on your system:

- Python 3.x
- Django
- Django REST Framework
- pip

## Installation

### 1. Set up a virtual environment

It is highly recommended to use a virtual environment to manage project dependencies.

```bash
python -m venv venv
source venv/bin/activate  # For Windows: venv\Scripts\activate
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Configure the Database

Make sure to update the database settings in settings.py if necessary (default is SQLite).

```bash
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'test_db',
        'USER': 'root',
        'PASSWORD': '',
        'HOST': '127.0.0.1',  # Use 'db' if running Docker
        'PORT': '3306',
    }
}
```

### 4. Run migrations

```bash
python manage.py migrate
```

### 5. Create a superuser (optional for accessing the Django admin)

```bash
python manage.py createsuperuser
```

### 6. Run the development server

```bash
python manage.py runserver
```

You should now be able to access the API at http://127.0.0.1:8000/.
