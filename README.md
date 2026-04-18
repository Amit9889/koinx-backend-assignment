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

# 🏗 Architecture

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

# ⚙️ Tech Stack

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

#  APIs

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

# 2️ Get Standard Deviation

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

#  Setup Instructions

## 1️ Clone Repository

```
git clone https://github.com/Amit9889/koinx-backend-assignment.git

cd koinx-backend-assignment
```

---

# 2️ Start NATS Server

Using Docker:

```
docker run -p 4222:4222 nats
```

---

# 3️ Setup API Server

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
MONGO_URI=mongodb://localhost:27017/cryptoDB
PORT=5000
```

---

#  Background Job

Worker server runs every:

```
15 minutes
```

For testing:

```
1 minute
```

---

#  Database Schema

```
{
 coin: String,
 price: Number,
 marketCap: Number,
 change24h: Number,
 createdAt: Date
}
```

---

# CoinGecko API Used

```
https://api.coingecko.com/api/v3/simple/price
```

---

#  Assignment Requirements Covered

 Two Node Servers
 MongoDB Integration
 External API Integration
 Background Job
 Event Queue (NATS)
 Production-level Structure

---

#  Future Improvements

* Deploy API on AWS / Render
* MongoDB Atlas Deployment
* Add Authentication
* Add Logging System
* Add Unit Testing

---

#  Author

**Amit Sahu**


---

#  Notes

This project follows clean architecture and event-driven design principles suitable for production-level backend systems.

---

#  Thank You

Thank you for reviewing this assignment. Looking forward to contributing at KoinX 
