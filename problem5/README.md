# Express TypeScript CRUD API

This is a simple CRUD API built with ExpressJS and TypeScript, connected to an SQLite database using Sequelize ORM.

## Prerequisites

- Node.js
- npm

## Installation

### Install dependencies:
```bash
npm install
```

### Set up environment variables

Create a .env file in the root directory and add the following:


```
DATABASE_URL=sqlite:database.sqlite
SECRET_KEY=9Ke0q.BkWMjLoW8IvLj8ReHzN.lhi2nXHDTqPSkL0FLKOWad62QTy
```

### Run seed user

```bash
npx ts-node src/seeds/seedUsers.ts
```

## Running the Application

Start the server:

```bash
npm run dev
```
The server will run on http://localhost:3000.

## API Endpoints

### Login

Endpoint: `POST /api/login`

Request Body

```json
{
    "email": "jane@example.com",
    "password": "password123"
}
```
Response:

```
{
    "token": "my_token"
}
```

### Create a Resource
Endpoint: `POST /api/resources`

Request Header:
```
Authentication: Bearer my_token
```

Request Body:

```json
{
  "name": "Resource Name",
  "description": "Resource Description"
}
```

Response:

```json
{
  "id": 1,
  "name": "Resource Name",
  "description": "Resource Description"
}

```

### List a Resource
Endpoint: `GET /api/resources`

Request Header:
```
Authentication: Bearer my_token
```

Request Query:

```json
{
  "name": "Resource Name" // can be nullable
}
```

Response:

```json
[
  {
    "id": 1,
    "name": "Resource Name",
    "description": "Resource Description"
  },
  ...
]

```

### Update a Resource
Endpoint: `POST /api/resources/:id`

Request Header:
```
Authentication: Bearer my_token
```

Request Body:

```json
{
  "name": "Resource Name",
  "description": "Resource Description"
}
```

Response:

```json
{
  "id": 1,
  "name": "Resource Name",
  "description": "Resource Description"
}

```

### Delete Resource

Endpoint: `DELETE /api/resources/:id`

Response:

```json
204 No Content
```
