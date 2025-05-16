# 🏏 IPL Player Management API

A RESTful API built using **Node.js**, **Express**, **MongoDB**, **Cloudinary**, and **Joi** to manage IPL cricket players. It supports CRUD operations, image upload, pagination, sorting, and search functionality.

---

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- Cloudinary (Image Upload)
- Multer (File Handling)
- Joi (Validation)
- Dotenv (Environment Variables)
- Postman (API Testing)

---

## 📁 Folder Structure

```
project-root/
│
├── controllers/        # All controller logic
├── models/             # Mongoose schemas
├── routes/             # API routes
├── middlewares/        # Custom middleware (validation, error handling)
├── utils/              # Utility functions (error helpers, cloudinary) & Joi schemas
├── .env
├── .gitignore
├── app.js
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

---

## 📦 Installation

```bash
git clone https://github.com/ankitcoder11/ipl-players-management-api.git
cd player-api
npm install
```

---

## 🛠️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/playerdb
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🚀 Run the Server

```bash
npm start
```

Server will run on: `http://localhost:5000`

---

## 📮 API Endpoints

### ➕ Create Player
```http
POST /api/players/create
```
- Body: `form-data`
- Fields: `name`, `team`, `country`, `role`, `salary`, `runs`, `image` (file)

### 📋 Get All Players (Paginated)
```http
GET /api/players/getAll?page=1&limit=10
```

### 🔎 Search & Sort Players
```http
GET /api/players/sortSearchPlayers?page=1&limit=10&search=MS&sortBy=runs&order=desc
```

### 👤 Get Single Player
```http
GET /api/players/getPlayerById/:id
```

### ✏️ Update Player
```http
PATCH /api/players/update/:id
```
- Accepts form-data including new image

### ❌ Delete Player
```http
DELETE /api/players/delete/:id
```

---

## ✅ Validations (Joi)

- `name`, `team`, `country`, `role`, `salary` are required
- `salary` must be a **positive number**
- `role` must be one of: `"Batsman"`, `"Bowler"`, `"All-rounder"`

---

## 📷 Image Upload

- Uses `multer` to accept file input
- Uploads image to **Cloudinary**
- Image field in `form-data`: `image`

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> Built with ❤️ using Node.js
