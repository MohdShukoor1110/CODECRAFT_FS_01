# CODECRAFT_FS_01 - Secure User Authentication Web Page
A simple but fully functional and responsive MERN-based secure authentication system featuring user registration, login, protected views, and session-based UI changes. Built using Node.js + Express.js + MongoDB Atlas on the backend and React.js on the frontend.

## 🚀 Features
- **User Registration & Login**
  - Credentials: username + password
  - Passwords safely hashed using bcryptjs
  - Tokens generated using JWT
- **Secure Backend**
  - MongoDB Atlas database
  - Middleware-protected routes
  - Environment variables via dotenv
  - CORS enabled for safe client–server communication
- **Interactive Frontend**
  - Built with React.js
  - React Router for navigation
  - Dynamic greeting:
    - Not logged in → “Welcome Developers”
    - Logged in → “Welcome <username>”
  - Toast notifications using React Toastify
  - Axios for API requests
  - Lucide React icons
- **Session Features**
  - Login
  - Logout
  - Auto-redirect to protected pages after login

## 🛠️ Tech Stack
### **Frontend**
- React.js
- React Router
- Axios
- React Toastify
- Lucide React

### **Backend**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcryptjs
- jsonwebtoken
- dotenv
- cors

## 🔐 Authentication Flow
1. User submits username & password
2. Backend:
    - Hashes password on registration
    - Verifies hash on login
    - Generates JWT token
3. Frontend stores token (localStorage)
4. Protected pages check token before rendering
5. Logout clears token

## ⚙️ Backend Setup
Install dependencies

```bash
  cd backend
  npm install
```

Environment variables (.env)

```text
  PORT = 5000
  MONGO_URI = <your_mongodb_atlas_connection>
  JWT_SECRET = <your_secret_key>
```

Start backend server

```bash
  npm run start
```

## 🌐 Frontend Setup
Install dependencies

```bash
  cd frontend
  npm install
```

Run frontend

```bash
  npm run dev
```

## 🔗 API Endpoints
### POST /register

Registers a new user.

### POST /login

Logs in an existing user.

## 🖼️ Frontend Behavior
| State         | UI Message               |
| ------------- | ------------------------ |
| Not logged in | **Welcome Developers**   |
| Logged in     | **Welcome `<username>`** |

#### Other UI features:

- Toasts on login/register success or failure
- Icons via Lucide React
- Navbar login/logout controls

