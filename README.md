# 🚑 Emergency Respond

An emergency response management system built with **Laravel**, **React**, and **Inertia.js** that enables citizens to report emergencies while allowing hospitals and ambulance personnel to manage incidents efficiently in real time.

The system aims to reduce emergency response time by providing a centralized platform for incident reporting, ambulance dispatching and hospital monitoring.

---

## ✨ Features

### 👤 Citizen
- Report emergency incidents
- Submit current location
- Track emergency request status
- Receive response updates

### 🚑 Ambulance Personnel
- View assigned emergency reports
- Accept emergency requests
- Navigate to incident location
- Update response status
- View estimated arrival time (ETA)

### 🏥 Hospital Administrator
- Dashboard overview
- Manage hospital information
- Manage ambulance availability
- Monitor incoming emergency reports

### 🗺️ Mapping
- Interactive map using Leaflet
- Current user location
- Hospital locations
- Emergency report locations
- Route navigation
- ETA calculation

### 🔐 Authentication
- User login
- Registration
- OTP verification
- Role-based access control

---

# 🛠 Tech Stack

## Frontend
- React
- Inertia.js
- Tailwind CS
- React Leaflet

## Backend
- Laravel
- PHP

## Database
- MySQL

## Mapping
- Leaflet
- OpenStreetMap

---

# 📁 Project Structure

```
emergency-respond/
│
├── app/
├── bootstrap/
├── config/
├── database/
├── public/
├── resources/
│   ├── js/
│   ├── css/
│   └── views/
├── routes/
├── storage/
├── tests/
├── artisan
├── composer.json
├── package.json
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Gil1226/emergency-respond.git

cd emergency-respond
```

---

## Install PHP Dependencies

```bash
composer install
```

---

## Install Node Packages

```bash
npm install
```

---

## Environment Setup

Copy the example environment file.

```bash
cp .env.example .env
```

Generate the application key.

```bash
php artisan key:generate
```

Configure your database credentials inside `.env`.

Example:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=emergency_respond
DB_USERNAME=root
DB_PASSWORD=
```

---

## Run Database Migration

```bash
php artisan migrate
```

(Optional)

```bash
php artisan db:seed
```

---

## Start Development Server

Run Laravel.

```bash
php artisan serve
```

Run Vite.

```bash
npm run dev
```

---

# 📍 System Workflow

1. User reports an emergency.
2. The report is stored in the database.
3. Hospital staff receives the report.
4. Ambulance personnel accept the request.
5. Route is generated on the map.
6. ETA is calculated.
7. User receives status updates until the emergency is resolved.

---

# 📸 Screenshots

Add screenshots here.

Example:

```
screenshots/
│
├── login.png
├── dashboard.png
├── map.png
├── report.png
├── hospital.png
└── respond.png
```

---

# 🚀 Future Improvements

- Push notifications
- SMS notifications
- Mobile application
- Real-time WebSocket updates
- Multi-hospital support
- Analytics dashboard
- Emergency history reports

---

# 👨‍💻 Developer

**Gillian I. Cortez**

Bachelor of Science in Information Technology  
Major in Web and Mobile Application

GitHub:
https://github.com/Gil1226

---

# 📄 License

This project is intended for educational and capstone purposes.

---

## ⭐ If you find this project helpful, consider giving it a star!
