# E-commerce Microservices System

## Overview

This project implements a microservices-based e-commerce system with user authentication, product management, and order processing. Each service is built using Node.js with Express and PostgreSQL.

## Services

1. **Auth Service**
   - Handles user registration and login.
   - Generates and verifies JWT tokens for authentication.

2. **Product Service**
   - Manages CRUD operations for products.
   - Implements optimistic locking to handle concurrent updates.

3. **Order Service**
   - Manages order placement and order history.
   - Ensures users can only access their own orders.

## Database Setup

Ensure PostgreSQL is installed and running on your machine. Create the following databases:

- `authdb` for the Auth Service
- `productdb` for the Product Service
- `orderdb` for the Order Service

Update the connection details (username and password) in each service's `config/database.js` file.

## Running the Services

1. Install dependencies:

```sh
cd auth-service
npm install
cd ../product-service
npm install
cd ../order-service
npm install
