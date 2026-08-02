
# 📚 Intern Vault

Intern Vault is a **full-stack resource management application** built with **React, TypeScript, Tailwind CSS, and Supabase**. It helps interns and learners organize, manage, and access important learning resources in one place.

The application supports complete **CRUD (Create, Read, Update, Delete)** functionality with a PostgreSQL database powered by Supabase and is deployed on **Vercel**.

---

# 🌐 Live Demo

**🔗 Live Website:**
[https://internvault-app.vercel.app/](https://internvault-app.vercel.app/)

---

# ✨ Features

* ➕ Add new resources
* ✏️ Edit existing resources
* 🗑️ Delete resources
* 💾 Store data permanently using Supabase
* 📅 Save resource dates
* 🏷️ Organize resources by category
* 🔗 Save documentation, YouTube videos, GitHub repositories, and useful links
* 📱 Fully responsive UI
* 🎨 Modern premium interface with Tailwind CSS
* ⚡ Fast performance with Vite
* ☁️ Deployed on Vercel

---

# 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Tailwind CSS
* Vite

### Backend

* Supabase
* PostgreSQL Database

### Deployment

* Vercel

### Version Control

* Git
* GitHub

---

# 📚 Concepts Practiced

* React Components
* useState Hook
* CRUD Operations
* Controlled Forms
* Conditional Rendering
* Event Handling
* TypeScript Interfaces
* Supabase Integration
* PostgreSQL Database
* Environment Variables
* Git & GitHub Workflow
* Vercel Deployment

---

# 📂 Project Structure

```text
src/
│── component/
│── services/
│     └── supabase.ts
│── types/
│── App.tsx
│── main.tsx
```

---

# ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Nadiayousaf/Intern_Vault.git
```

### Navigate into Project

```bash
cd Intern_Vault
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the project root.

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Run Development Server

```bash
npm run dev
```

---

# 🗄️ Database Schema

Table Name:

```text
resources
```

| Column      | Type        |
| ----------- | ----------- |
| id          | int8        |
| title       | text        |
| category    | text        |
| date        | date        |
| description | text        |
| link        | text        |
| created_at  | timestamptz |

---

# 📸 Project Preview

<img width="1920" height="927" alt="Screenshot (827)" src="https://github.com/user-attachments/assets/7cec2968-4a1a-4003-86df-520f8c0e4a0d" />
-----
<img width="1920" height="952" alt="Screenshot (828)" src="https://github.com/user-attachments/assets/41d6babb-4001-4405-a471-535f16b2eb9c" />

---

# 🚀 Deployment

This project is deployed on **Vercel**.

**Live URL**

```text
https://internvault-app.vercel.app/
```

---

# 🎯 Learning Outcomes

This project helped me gain practical experience with:

* Building scalable React applications
* TypeScript fundamentals
* Tailwind CSS UI development
* Database integration using Supabase
* PostgreSQL CRUD operations
* Environment Variables
* Git & GitHub workflow
* Vercel deployment
* Production-ready application setup

---

# 🔮 Future Improvements

* 🔍 Search Resources
* 🏷️ Category Filters
* 📊 Dashboard Statistics
* 🌙 Dark / Light Mode
* ⭐ Favorite Resources
* 🔐 Supabase Authentication
* 👤 User-specific Resources
* 📤 Export Resources
* 📥 Import Resources
* 🔔 Toast Notifications
* 🎬 Smooth Animations
* 📱 Progressive Web App (PWA)

---

# 👩‍💻 Author

## Nadia Yousaf

### Connect With Me

* GitHub: [https://github.com/Nadiayousaf](https://github.com/Nadiayousaf)

## ⭐ Support

If you found this project helpful, please consider giving it a **⭐ Star** on GitHub.

