# HNG Stage2 Task

## Description

A simple REST API capable of CRUD operations on a "person" resource, interfacing with a mongodb database

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#Usage)

## Available Endpoints

| Endpoint         | Description         | HTTP Methods |
| ---------------- | ------------------- | ------------ |
| `/api/`          | Creates a new user. | POST         |
| `/api/{user_id}` | Update a user.      | PUT          |
| `/api/{user_id}` | Fetches a user.     | GET          |
| `/api/{user_id}` | Deletes a user.     | DELETE       |

## API Documentation

For detailed API documentation, including endpoint descriptions, request/response examples, and more, please refer to the [API Documentation](./Documentation.md) file.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node](https://nodejs.dev/download/package-manager/) (latest version)
- [npm](https://nodejs.dev/en/download/package-manager/) (downloaded together with nodejs)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Wilsonide/HNGStage2.git
   cd your-api-project
   ```

2. Initialize the Node.js App with a package.json file:
   ```
   npm init
   ```
3. Install necessary modules: express, mongoose and cors
   ```
   npm install express mongoose cors --save
   ```
4. Setup Express web server.

   In the root folder, let’s create a new server.js file:

   ```

   const express = require("express");
   const cors = require("cors");

   const app = express();

   var corsOptions = {
   origin: "http://localhost:8081"
   };

   app.use(cors(corsOptions));

   // parse requests of content-type - application/json
   app.use(express.json());

   // parse requests of content-type - application/x-www-form-urlencoded
   app.use(express.urlencoded({ extended: true }));

   // simple route
   app.get("/", (req, res) => {
   res.json({ message: "Welcome to bezkoder application." });
   });

   // set port, listen for requests
   const PORT = process.env.PORT || 8080;
   app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}.`);
   });
   ```

5. Run the project
   ```
   node server.js
   ```
   Your API should now be running locally at http://localhost:5000
