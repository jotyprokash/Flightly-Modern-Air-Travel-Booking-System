✈️ Flight Booking Application (MERN Stack)

A full-stack Flight Booking web application built using React, Node.js, Express, and MongoDB (local).
This setup runs entirely on a self-hosted Ubuntu VM without MongoDB Atlas or environment files.

🧱 Tech Stack

Frontend: React, Axios, Material-UI, Bootstrap

Backend: Node.js, Express, Passport-JWT

Database: MongoDB (Local)

Auth: JWT (JSON Web Token)

📁 Project Structure
Flight-Booking-App/
├── backend/
│   ├── app.js
│   ├── bin/www
│   ├── routes/
│   ├── models/
│   ├── config/keys.js
│   └── package.json
└── frontend/
    ├── src/
    ├── public/
    └── package.json

🚀 Deployment Guide (Ubuntu)
1️⃣ Install Node.js (v18)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v

2️⃣ Install MongoDB (Local)

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


Start MongoDB

sudo systemctl start mongod
sudo systemctl enable mongod


Verify:

mongosh

3️⃣ Backend Setup
cd ~/Flight-Booking-App/backend
npm install
npm install -g nodemon

MongoDB Config

backend/config/keys.js

module.exports = {
  MongoURI: "mongodb://127.0.0.1:27017/flightapp"
};

Start Backend
npm run devStart


Backend runs on:

http://localhost:8080

4️⃣ Frontend Setup
cd ~/Flight-Booking-App/frontend
npm install
export NODE_OPTIONS=--openssl-legacy-provider
npm start


Frontend runs on:

http://localhost:3000


🔐 Authentication Flow

Register: POST /register

Login: POST /login

JWT Token returned on login

Protected routes use Passport-JWT
