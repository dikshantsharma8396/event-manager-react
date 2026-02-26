# 📅 Mini Event Manager (React)

A professional Event Management Dashboard built with **React.js**. This version features **Dynamic Role-Based Access**, real-time search, and persistent storage.

---

## 🚀 Key Features

### 🔐 New: Dynamic Authentication (Regex Based)
- **Email Validation**: Uses Regular Expressions to ensure a valid email format.
- **Dynamic Roles**: No fixed passwords! Use the keyword **"Admin"** anywhere in your name for full access.
- **User Role**: Any other name gets "View Only" access.
- **Personalization**: Displays "Welcome, [User Name]" on the dashboard.

### 🛠️ Event Management (CRUD)
- **Create**: Admins can add events (Title, Date, Description).
- **Read**: Responsive grid layout to view all events.
- **Update/Delete**: Admin-only controls to manage event data.

### 🌟 Bonus Functionalities
- **Real-Time Search**: Filter events instantly by title.
- **Date Sorting**: Toggle between newest and oldest events.
- **Dark Mode**: Persistent theme toggle (saves your preference).
- **No Backend**: Uses `localStorage` to keep your data safe even after refresh.

---

## 🔑 How to Login (Demo)
1. **To be an Admin**: Enter Name like `Dikshant Admin`, any valid email (e.g., `test@gmail.com`), and any password (min 6 chars).
2. **To be a User**: Enter any name (without "Admin"), a valid email, and password.

---

## 📁 Project Structure
- `src/components/`: Modular UI Components.
- `src/components/styles/`: Centralized CSS.
- `src/App.jsx`: State management & logic.

---

## 🛠️ Tech Stack
- **Frontend**: React.js (Hooks: `useState`, `useEffect`).
- **Styling**: CSS3 (Flexbox & CSS Grid for Responsive UI).
- **Storage**: Browser `localStorage` (No backend/DB required).
- **Build Tool**: Vite.

---

## 🏃‍♂️ How to Run Locally
1. Clone the repo:
   ```bash
   git clone [https://github.com/dikshantsharma8396/event-manager-react.git](https://github.com/dikshantsharma8396/event-manager-react.git)
2. Install dependencies:
   
   npm install

4. Start the developer server:
   
   npm run dev

## 🔑 Demo Login (Any Valid Format)
- **Email**: koi_bhi@gmail.com
- **Password**: 123456 (min 6 chars)
- **Role Tip**: Name mein "Admin" likhein admin features dekhne ke liye.