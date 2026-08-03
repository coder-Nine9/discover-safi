# 🌊 Visit Safi

Visit Safi is a full-stack tourism website designed to help visitors explore the city of Safi, Morocco. The application showcases popular attractions, beaches, local activities, and provides an interactive map to help users discover the city. Visitors can also send inquiries through a contact form, which stores messages in a SQLite database.

---

## ✨ Features

- 🏖️ Discover Safi's most popular beaches and attractions.
- 🗺️ Interactive map built with Leaflet.
- 📍 Display locations of important places.
- 🎬 Smooth animations with Framer Motion.
- 📱 Responsive design for desktop and mobile devices.
- 📨 Contact form connected to an Express.js backend.
- 💾 Store contact messages in a SQLite database.
- ⚡ REST API for managing contact form submissions.

---

## 🛠️ Technologies Used

### Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Leaflet

### Backend

- Node.js
- Express.js
- SQLite
- better-sqlite3

---

## 📂 Project Structure

```text
visitSafi/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── app.js
│   ├── database.js
│   ├── routes/
│   ├── controllers/
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/coder-Nine9/visitSafi.git
```

### 2. Start the frontend

```bash
cd visitSafi/frontend
npm install
npm run dev
```

The frontend will run on:

```
http://localhost:5173
```

### 3. Start the backend

Open another terminal:

```bash
cd visitSafi/backend
npm install
node app.js
```

The backend will run on:

```
http://localhost:3000
```

---

## 📡 API

### Create a contact message

**POST**

```
/clients
```

Request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Visit Safi",
  "message": "I would like more information."
}
```

---

### Get all contact messages

**GET**

```
/clients
```

---

## 📸 Screenshots

You can add screenshots of:

- Home page
- Attractions section
- Interactive map
- Contact page

---

## 🎯 Future Improvements

- User authentication
- Admin dashboard
- Email notifications
- Image gallery management
- Online booking system
- Deployment to production

---

## 👨‍💻 Author

**Abdelaziz El Khannoussi**

If you like this project, feel free to star the repository and share your feedback.
