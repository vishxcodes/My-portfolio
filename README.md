# 🖥️ Vishesh – Developer Portfolio (MERN Stack)

A professional, dark-themed developer portfolio built with the full **MERN stack**.

## ✨ Features

- 🌑 Pure dark theme with cyan/purple accent system
- 🖱️ Custom animated cursor (dot + trailing ring)
- ✨ Canvas particle background with mouse repel
- 🎞️ Smooth scroll + scroll-reveal animations
- 🔤 Typewriter role animation in Hero
- 🖼️ 3D tilt on Project cards
- 📬 Contact form saved to MongoDB via REST API
- 📱 Fully responsive design
- 🔍 SEO optimized

## 🗂️ Structure

```
Portfolio/
├── client/   # React + Vite frontend
└── server/   # Node + Express + MongoDB backend
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### 1. Clone & Install

```bash
# Install client dependencies
cd client && npm install

# Install server dependencies
cd ../server && npm install
```

### 2. Configure Environment

Edit `server/.env`:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio
```

### 3. Seed Database (optional)

```bash
cd server && npm run seed
```

### 4. Run Both Servers

**Terminal 1 – Backend:**
```bash
cd server && npm run dev
```

**Terminal 2 – Frontend:**
```bash
cd client && npm run dev
```

Open http://localhost:5173

## 🛠️ Tech Stack

| Area | Technology |
|---|---|
| Frontend | React 18, Vite, CSS Variables |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| HTTP | Axios |
| Animations | CSS + Intersection Observer + Canvas |

## 📡 API Endpoints

| Method | Route | Description |
|---|---|---|
| GET | `/api/projects` | Fetch all projects |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/health` | Health check |
