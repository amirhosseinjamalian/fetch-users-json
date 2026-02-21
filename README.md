# 🚀 UserFetch – Dynamic User Loader

A simple and clean web application built with **Vanilla JavaScript** that fetches user data from a local JSON file using the **Fetch API** and renders it dynamically on the page.

---

## 📌 Overview

UserFetch demonstrates how to:

- Fetch external JSON data
- Handle asynchronous JavaScript (Promises)
- Display dynamic content using DOM manipulation
- Handle loading states
- Handle error states gracefully

This project is built without any frameworks.

---

## ✨ Features

✅ Fetch data using `fetch()`  
✅ Handle Promises with `.then()`  
✅ Loading state before data rendering  
✅ Dynamic DOM creation  
✅ Error handling with `.catch()`  
✅ Clean UI with hover effects  
✅ RTL layout support  

---

## 🛠 Technologies Used

- HTML5  
- CSS3  
- Vanilla JavaScript (ES6)  
- Fetch API  
- JSON  

---

## 📂 Project Structure

vanilla-js-fetch-users/
│
├── index.html
├── style.css
├── app.js
└── Users/
└── users.json

---

## 🧠 How It Works

🔹 On page load:
- A loading message is displayed

🔹 After 1 second delay:
- `fetch()` requests the JSON file
- Data is converted using `.json()`
- Each user is rendered dynamically as a card

🔹 If an error occurs:
- A friendly error message is displayed

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/amirhosseinjamalian/fetch-users-json.git
