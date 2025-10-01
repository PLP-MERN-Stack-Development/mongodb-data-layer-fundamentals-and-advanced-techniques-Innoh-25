**PLP Bookstore MongoDB Project**


**A comprehensive MongoDB project for managing a bookstore database with sample data, queries, and aggregation pipelines.**


**Project Structure**

plp-bookstore/

├── insert_books.js                   # Script to populate MongoDB with sample book data

├── bookstore_queries.js              # Complete MongoDB queries and operations

├── README.md                        # This file

└── package.json                      # Node.js dependencies (if needed)

**Prerequisites**


Before running the scripts, ensure you have the following installed:


Node.js (version 12 or higher)


Download from: https://nodejs.org/


Verify installation: node --version


MongoDB


Option 1: MongoDB Community Server (local installation)


Download from: https://www.mongodb.com/try/download/community


Installation guide: https://docs.mongodb.com/manual/administration/install-community/


Option 2: MongoDB Atlas (cloud-based)


Sign up at: https://www.mongodb.com/cloud/atlas


Create a free cluster


MongoDB Node.js Driver


This will be installed automatically when running the scripts


**Installation & Setup**


1. Clone or Download the Project

   
# Create project directory
mkdir plp-bookstore
cd plp-bookstore

# Place the provided JavaScript files in this directory


2. Install Dependencies (Optional)


Create a package.json file if you want to manage dependencies:

json
{
  "name": "plp-bookstore",
  "version": "1.0.0",
  "description": "MongoDB Bookstore Management System",
  "main": "insert_books.js",
  "scripts": {
    "setup": "node insert_books.js",
    "queries": "node bookstore_queries.js",
    "start": "npm run setup && npm run queries"
  },
  "dependencies": {
    "mongodb": "^4.0.0"
  }
}
Then install dependencies:

bash
npm install


3. Configure Database Connection
   
For Local MongoDB:

Ensure MongoDB is running on default port 27017

The scripts use: mongodb://localhost:27017

For MongoDB Atlas:

Update the connection string in both JavaScript files:

javascript

// Replace this line in both insert_books.js and bookstore_queries.js

const uri = 'mongodb://localhost:27017';

// With your Atlas connection string (get from Atlas dashboard)


const uri = 'mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority';

Running the Scripts

Step 1: Populate the Database

Run the script to insert sample book data:


# Using Node.js directly

node insert_books.js

# Or if using package.json

npm run setup

Expected Output:

Connected to MongoDB server

12 books were successfully inserted into the database

Inserted books:

1. "To Kill a Mockingbird" by Harper Lee (1960)

2. "1984" by George Orwell (1949)

... (more books)

Connection closed

Step 2: Execute All Queries

Run the comprehensive queries script:



# Using Node.js directly

node bookstore_queries.js

# Or if using package.json

npm run queries



Run Both Scripts Sequentially on git bash

npm start

Script Details

insert_books.js

Creates database: plp_bookstore

Creates collection: books

Inserts 12 sample books with various attributes

Drops existing collection if it exists (to avoid duplicates)

bookstore_queries.js

Performs the following operations:

Task 2: Basic CRUD Operations

Find books by genre, author, publication year

Update book prices

Delete books by title

Task 3: Advanced Queries

Complex filters (in stock + published after year)

Field projection

Sorting (ascending/descending)

Pagination (5 books per page)

Task 4: Aggregation Pipeline

Average price by genre

Author with most books

Books grouped by publication decade

Task 5: Indexing

Single field index on title

Compound index on author and published_year

Performance demonstration with explain()

Database Schema

The books collection uses the following schema:

javascript
{
  title: String,
  author: String,
  genre: String,
  published_year: Number,
  price: Number,
  in_stock: Boolean,
  pages: Number,
  publisher: String
}

Sample Data Included

The database will be populated with 12 classic books including:

"To Kill a Mockingbird" by Harper Lee

"1984" by George Orwell

"The Great Gatsby" by F. Scott Fitzgerald

"The Hobbit" by J.R.R. Tolkien

And 8 other classic titles

Troubleshooting

Common Issues

Connection Refused


Error: connect ECONNREFUSED 127.0.0.1:27017

Solution: Ensure MongoDB is running locally or check your Atlas connection string.

Authentication Failed

Error: Authentication failed

Solution: Check username/password in Atlas connection string.

Module Not Found


Error: Cannot find module 'mongodb'

Solution: Install dependencies: npm install

Verify MongoDB Installation

On Windows:

bash
# Check if MongoDB service is running

net start | findstr MongoDB

# Start MongoDB service (if stopped)

net start MongoDB

On macOS:

bash

# Check if MongoDB is running

brew services list | grep mongodb

# Start MongoDB (if using Homebrew)

brew services start mongodb/brew/mongodb-community

On Linux:

bash

# Check MongoDB status

sudo systemctl status mongod

# Start MongoDB service

sudo systemctl start mongod

Useful MongoDB Commands

After running the scripts, you can connect to MongoDB directly:

bash

# Connect to MongoDB shell

mongosh

# Switch to bookstore database

use plp_bookstore

# View all books

db.books.find().pretty()

# Count total books

db.books.countDocuments()

# View created indexes
db.books.getIndexes()
