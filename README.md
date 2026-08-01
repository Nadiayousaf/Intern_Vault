<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
=======
# 📚 Intern Vault

Intern Vault is a **React + TypeScript** application designed to organize and manage internship resources in one place. It allows users to add, edit, delete, and store useful learning materials, making it easier to keep track of courses, articles, documentation, and reference links.

---

## ✨ Features

* ➕ Add new resources
* ✏️ Edit existing resources
* 🗑️ Delete resources
* 💾 Local Storage support (data persists after refresh)
* 📅 Store resource date
* 🏷️ Organize resources by category
* 🔗 Save useful links
* 📱 Responsive and clean UI
* ⚡ Built with React Hooks

---

## 🛠️ Tech Stack

* React
* TypeScript
* Vite
* CSS
* Tailwind CSS

---

## 📚 Concepts Practiced

* React Components
* useState Hook
* Controlled Forms
* CRUD Operations
* Conditional Rendering
* Event Handling
* TypeScript Interfaces
* Array Methods
* Local Storage

---

## 📂 Project Structure

```text
src/
│── components/
│── types/
│── App.tsx
│── App.css
│── main.tsx
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/intern-vault.git
```

### Navigate to the project

```bash
cd intern-vault
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

---

## 📸 Preview

<img width="1920" height="1080" alt="Screenshot (810)" src="https://github.com/user-attachments/assets/3cabe001-c458-4d49-9eda-31348746119e" />
----------
<img width="1920" height="1080" alt="Screenshot (811)" src="https://github.com/user-attachments/assets/226c1809-eb63-4880-8a0a-230d194f42f7" />

## 🎯 Learning Outcomes

This project helped practice:

* React State Management
* TypeScript Fundamentals
* CRUD Functionality
* Form Handling
* Component-Based Architecture

---

## 🔮 Future Improvements

* Search resources
* Filter by category
* Sort by date
* Dark/Light mode
* Resource favorites
* Export and import data
* Backend integration with Supabase
* User authentication

---

## 👩‍💻 Author

**Nadia Yousaf**

If you found this project helpful, consider giving it a ⭐ on GitHub.
>>>>>>> 59239210b43fd656ed3f9ce0b30ae04eeb4ef193
