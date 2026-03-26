# Truck Drivers Log

A full-stack web application for managing and tracking truck driver activity logs. Built with a **Django** backend and a **TypeScript/React** frontend, it provides a clean interface for recording, viewing, and managing driver trip logs.

---

## Project Structure

```
truck_drivers_log/
├── drivers_log/          # Django app — models, views, URLs, serializers
└── truck_drivers_log/    # Django project config — settings, root URLs, WSGI/ASGI
```

| Path | Purpose |
|------|---------|
| `drivers_log/` | Core application logic: data models, API views, business rules |
| `truck_drivers_log/` | Project configuration: `settings.py`, `urls.py`, WSGI/ASGI entrypoints |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | TypeScript · React (or Next.js) · JavaScript |
| **Backend** | Python · Django · Django REST Framework |
| **Database** | SQLite (development) / PostgreSQL (recommended for production) |

**Language breakdown:** TypeScript 71.5% · Python 17.3% · JavaScript 11.2%

---

## Features

- 📋 **Driver Log Management** — Create, read, update, and delete driver trip entries
- 🗂️ **Structured Records** — Track key trip data (driver info, routes, timestamps, etc.)
- 🔌 **REST API** — Django-powered API consumed by the TypeScript frontend
- 🖥️ **Modern UI** — Responsive frontend built with TypeScript and React
- 🔒 **Admin Interface** — Django admin panel for backend data management

---

## Getting Started

### Prerequisites

- Python 3.9+
- Node.js 18+
- npm or yarn

---

### Backend Setup (Django)

```bash
# 1. Clone the repository
git clone https://github.com/LennyBeto/truck_drivers_log.git
cd truck_drivers_log

# 2. Create and activate a virtual environment
python -m venv venv
source venv/bin/activate        # macOS/Linux
venv\Scripts\activate           # Windows

# 3. Install Python dependencies
pip install -r requirements.txt

# 4. Apply database migrations
python manage.py migrate

# 5. (Optional) Create a superuser for the admin panel
python manage.py createsuperuser

# 6. Start the Django development server
python manage.py runserver
```

The API will be available at `http://localhost:8000/`.

---

### Frontend Setup

```bash
# Navigate to the frontend directory (if separate)
cd drivers_log   # or the frontend folder

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will be available at `http://localhost:3000/`.

---

## API Overview

The Django backend exposes a RESTful API for managing driver logs. Common endpoints include:

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/logs/` | List all driver logs |
| `POST` | `/api/logs/` | Create a new log entry |
| `GET` | `/api/logs/:id/` | Retrieve a specific log |
| `PUT` | `/api/logs/:id/` | Update a log entry |
| `DELETE` | `/api/logs/:id/` | Delete a log entry |

> **Note:** Exact endpoints may vary. Run `python manage.py show_urls` or check `drivers_log/urls.py` for the full route listing.

---

## Database

The project uses **SQLite** by default for development. To switch to PostgreSQL for production, update the `DATABASES` setting in `truck_drivers_log/settings.py`:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'truck_drivers_db',
        'USER': 'your_db_user',
        'PASSWORD': 'your_db_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

---

## Deployment

For production, consider the following:

- Set `DEBUG = False` in `settings.py`
- Configure `ALLOWED_HOSTS` with your domain
- Use a production WSGI server (e.g., **Gunicorn**)
- Serve static files via **Nginx** or a CDN
- Use **PostgreSQL** as the database backend
- Store secrets in environment variables (use `python-decouple` or `django-environ`)

---

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## License

This project is open source. See the repository for license details.

---

## 👤 Author

**LennyBeto** — [github.com/LennyBeto](https://github.com/LennyBeto)
