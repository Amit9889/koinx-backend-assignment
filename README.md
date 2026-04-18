#  KoinX Backend Internship Assignment

##  Project Overview

This project implements a **Crypto Statistics Backend System** using:

* Node.js
* MongoDB
* NATS (Event Queue)
* CoinGecko API
* Background Worker Jobs

The system collects cryptocurrency statistics periodically and exposes APIs to retrieve **latest stats** and **standard deviation** of prices.

---

#  Architecture

```
Worker Server
     ↓
Publish Event (Every 15 min)
     ↓
NATS Event Queue
     ↓
API Server
     ↓
CoinGecko API
     ↓
MongoDB Database
     ↓
REST APIs
```

---

#  Project Structure

```
koinx-backend-assignment
│
├── api-server
│   ├── src
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   └── index.js
│   ├── .env
│   └── package.json
│
└── worker-server
    ├── index.js
    └── package.json
```

---

#  Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* NATS
* Axios
* Node Cron
* CoinGecko API

---

#  Features

 Fetch Crypto Data from CoinGecko
 Store Data in MongoDB
 Background Job Every 15 Minutes
 Event Driven Architecture (NATS)
 REST APIs
 Standard Deviation Calculation

---

#  Supported Cryptocurrencies

* Bitcoin
* Ethereum
* Matic Network

---

# 🔌 APIs

## 1️ Get Latest Stats

### Endpoint

```
GET /api/stats
```

### Query Params

```
coin=bitcoin
```

### Example

```
http://localhost:5000/api/stats?coin=bitcoin
```

### Response

```
{
  "price": 65000,
  "marketCap": 1200000000,
  "24hChange": 2.3
}
```

---

# 2️⃣ Get Standard Deviation

### Endpoint

```
GET /api/deviation
```

### Example

```
http://localhost:5000/api/deviation?coin=bitcoin
```

### Response

```
{
  "deviation": 234.45
}
```

---

# 🛠 Setup Instructions

## 1️⃣ Clone Repository

```
git clone https://github.com/Amit9889/koinx-backend-assignment.git

cd koinx-backend-assignment
```

---

# 2️⃣ Start NATS Server

Using Docker:

```
docker run -p 4222:4222 nats
```

---

# 3️⃣ Setup API Server

```
cd api-server
npm install
npm start
```

---

# 4️ Setup Worker Server

Open New Terminal

```
cd worker-server
npm install
node index.js
```

---

# 🗄 MongoDB Setup

Create `.env` file in api-server

```
MONGO_URI=mongodb://localhost:27017/
```
