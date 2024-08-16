# Monorepo Setup: Inventory Management System

## Table of Contents

1. [Introduction](#introduction)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Prerequisites](#prerequisites)
5. [Installation](#installation)
6. [Environment Variables](#environment-variables)
7. [Database Setup](#database-setup)
8. [Running the Application](#running-the-application)
9. [Seeding the Database](#seeding-the-database)
10. [Development Workflow](#development-workflow)
11. [Useful Commands](#useful-commands)
13. [License](#license)

## Introduction

This monorepo contains an Inventory Management System, including a Next.js client application and a Node.js server with Prisma and TypeScript. The project is structured to be scalable, maintainable, and easy to work with.

## Technologies Used

- **Next.js**: React framework for building client-side applications.
- **Node.js**: JavaScript runtime for the server.
- **Prisma**: ORM for database management.
- **TypeScript**: Typed JavaScript to enhance code quality.
- **PostgreSQL**: Relational database for storing data.
- **NPM Workspaces**: Monorepo management.

## Project Structure

```bash
├── /client/          # Next.js application
├── /server/          # Node.js server with Prisma
├── /server/prisma/          # Prisma schema and migration files
├── /scripts/         # Utility scripts (e.g., for seeding)
├── /node_modules/    # Project dependencies
└── package.json      # Root package configuration
```

## Prerequisites

- **Node.js** (v16 or higher)
- **NPM** (v1.22 or higher)
- **PostgreSQL** (v13 or higher)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/inventory-management-system.git
    cd inventory-management-system
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up the environment variables:**

    Copy the `.env.example` file to create a `.env` file in both the `client/` and `server/` directories, and configure the necessary environment variables.

    ```bash
    cp client/.env.example client/.env
    cp server/.env.example server/.env
    ```

## Environment Variables

### Client

- `NEXT_PUBLIC_API_URL`: The URL for the server's API.

### Server

- `DATABASE_URL`: The connection string for your PostgreSQL database.
- `PORT`: The port on which the server will run.

## Database Setup

1. **Set up the database:**

    Ensure that your PostgreSQL server is running and that the `DATABASE_URL` in the server's `.env` file is correct.

2. **Run Prisma migrations:**
    If your tables are not set then 
    ```bash
    cd server
    npx prisma migrate dev --name init 
    ```

3. **Generate Prisma Client:**

    ```bash
    npx prisma generate
    ```

## Running the Application

1. **Start the server:**

    ```bash
    cd server
    npm run dev dev
    ```

2. **Start the client:**

    Open a new terminal window:

    ```bash
    cd client
    npm run dev
    ```

3. **Access the application:**

    The client will typically be available at `http://localhost:3000`, and the server at `http://localhost:4000`.

## Seeding the Database

1. **Seed data:**

    Run the following command from the `server` directory:

    ```bash
    npm run seed
    ```

    This will populate your database with initial data required for the application.

## Development Workflow

- **Client:** Develop the client-side using Next.js and React.
- **Server:** Develop the server-side using Node.js, Prisma, and TypeScript.
- **Database:** Manage and migrate the database using Prisma.

## Useful Commands

- **Install dependencies:**

    ```bash
    npm install
    ```

- **Run migrations:**

    ```bash
    npx prisma migrate deploy
    ```

- **Seed the database:**

    ```bash
    npm run seed
    ```

- **Start development server:**

    ```bash
    npm run dev
    ```

- **Build for production:**

    ```bash
    npm run  build
    ```


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
