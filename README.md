# ✈️ Flightly – An Air Booking Web Application

Flightly is a full-stack air booking web application built with **React, Node.js, Express, and MongoDB**.  
The project covers real-world booking flows including user authentication, route selection, seat booking, payments, and ticket management.

This project was locally deployed, debugged, and stabilized as part of hands-on R&D and system integration work.

---

## 🚀 Features

- User registration & login (JWT based)
- Route & seat selection
- Ticket booking & cancellation
- Travel history & profile management
- Payment flow UI
- Integrated chatbot support (Kommunicate)
- MongoDB local database (no Atlas dependency)
- Fully local development setup

---

## 🛠 Tech Stack

**Frontend**
- React (CRA)
- Axios
- Material-UI
- Bootstrap

**Backend**
- Node.js
- Express
- MongoDB (local)
- Mongoose
- JWT Authentication
- Passport.js
- bcrypt

---

## ⚙️ Run Locally

### 1️⃣ System Requirements

- Ubuntu (tested on Ubuntu 22.04 / 24.04)
- Node.js 18.x
- MongoDB 7.x
- npm

---
🔹 Install Node.js

Run the following from your home directory:

curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

node -v
npm -v

🔹 Frontend Setup
cd ~/Flightly-An-Air-Booking-Web-App/frontend
npm install
npm install @kommunicate/kommunicate-chatbot-plugin
export NODE_OPTIONS=--openssl-legacy-provider
npm start


Frontend URL

http://localhost:3000

🔹 MongoDB Installation (Local)
Import MongoDB GPG Key
curl -fsSL https://pgp.mongodb.com/server-7.0.asc | \
sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg --dearmor

Add MongoDB Repository
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] \
https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | \
sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

Install MongoDB
sudo apt update
sudo apt install -y mongodb-org

Start & Enable MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod
systemctl status mongod


MongoDB Connection URI

mongodb://127.0.0.1:27017

🔹 Backend Setup
cd ~/Flightly-An-Air-Booking-Web-App/backend
sudo apt update
sudo apt install -y build-essential python3 make g++

Install Dependencies
rm -rf node_modules package-lock.json
npm install
npm rebuild bcrypt --build-from-source

Start Backend
sudo npm install -g nodemon
nodemon -v
npm run devStart


Backend URL

http://localhost:8080

🔹 MongoDB Configuration (No .env Used)

File: backend/config/keys.js

module.exports = {
  MongoURI: "mongodb://127.0.0.1:27017/flightapp"
};


Database Name

flightapp

✅ Verification
Backend Health Check
curl http://localhost:8080

MongoDB Check
mongosh
use flightapp
show collections

