# 📅 Mini Event Manager (React)

A full-featured Event Management Dashboard built with **React.js**. This project features Role-Based Access Control (RBAC), real-time search, sorting, and a fully responsive UI.

---

## 🚀 Key Features

### 🔐 Role-Based Authentication
- **Admin Role**: Full access to Create, Read, Update, and Delete (CRUD) events.
- **User Role**: View-only access to the event dashboard.
- **Persistent Login**: Session state is saved using `localStorage`.

### 🛠️ Event Management (CRUD)
- **Create**: Admins can add new events with titles, dates, and descriptions.
- **Read**: Dynamic display of event cards in a centered, responsive grid.
- **Update**: Edit existing events directly from the dashboard.
- **Delete**: Remove outdated events with a single click.

### 🌟 Bonus Functionalities
- **Real-Time Search**: Instantly filter events by title as you type.
- **Date Sorting**: Toggle between "Oldest First" and "Newest First" sorting.
- **Dark Mode**: A smooth, persistent theme toggle for better user experience.
- **Form Validation**: Prevents empty event submissions with instant alerts.

---

## 📁 Project Structure
Following a **clean folder structure** for scalability:
- `src/components/`: Modular React components (Navbar, EventCard, Login).
- `src/components/styles/`: Centralized CSS for layout and theming.
- `src/App.jsx`: Main logic handling state and persistence.
- `src/main.jsx`: Application entry point.

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
   '''bash
   npm install

4. Start the developer server:
   '''bash
   npm run dev

 🔑 Demo Credentials
Admin: username: admin | password: admin123

User: username: user | password: user123      
