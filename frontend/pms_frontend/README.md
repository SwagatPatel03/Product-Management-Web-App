# Product Management Web App

A full-stack web application for managing products with user authentication and CRUD operations.

## Features

- User Authentication (JWT-based)
  - Registration
  - Login/Logout
  - Protected routes
- Product Management
  - Create, Read, Update, Delete products
  - Filter by category, price range, or rating
  - Search by name or description
- Pagination for product listings
- Responsive UI

## Tech Stack

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT Authentication
- RESTful API Design

### Frontend
- React.js with Hooks
- React Router for navigation
- Context API for state management
- Axios for API requests

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- MongoDB (local installation or MongoDB Atlas)
- Git

### Installation

1. Clone the repository
git clone https://github.com/SwagatPatel03/Product-Management-Web-App.git

2. Backend Setup
cd backend
npm install

Create a `.env` file in the backend directory:
PORT=5000
MONGO_URI=mongodb://localhost:27017/product_management
JWT_SECRET=your_secret_key_here

3. Frontend Setup
cd ../frontend
npm install

### Running the Application

1. Start the backend server
cd backend
npm run dev

2. Start the frontend application
cd frontend
npm start

3. Open your browser and navigate to `http://localhost:3000`

## API Endpoints

### User Routes
- POST /api/users - Register a new user
- POST /api/users/login - Login user
- GET /api/users/profile - Get user profile (protected)

### Product Routes
- POST /api/products - Create a new product (protected)
- GET /api/products - Get all products with filters (protected)
- GET /api/products/:id - Get a single product (protected)
- PUT /api/products/:id - Update a product (protected)
- DELETE /api/products/:id - Delete a product (protected)

## Project Structure
product-management-app/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── productController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── models/
│   │   ├── Product.js
│   │   └── User.js
│   ├── routes/
│   │   ├── productRoutes.js
│   │   └── userRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
├── public/
└── src/
├── components/
│   ├── Auth/
│   ├── Layout/
│   ├── Products/
│   └── UI/
├── context/
├── pages/
├── utils/
├── App.css
├── App.js
└── index.js

## Future Enhancements

- Product image upload
- Role-based access control (Admin vs User)
- Advanced filtering and sorting
- User profile management
- Dockerization for easy deployment

## Problems Encountered
- Implementing the Delete Function due to deprecated funtion (.remove) - NOT FIXED
- Products not being displayed after adding a new product - FIXED
- Minor Problems in JWT Authentications - FIXED