//Basic CRUD Operations

// Find all books in a specific genre
db.books.find({ genre: "Fiction" })

// Find books published after a certain year
db.books.find({ published_year: { $gt: 1950 } })

// Find books by a specific author
db.books.find({ author: "George Orwell" })
    
// Update the price of a specific book
db.books.updateOne(
  { title: "The Hobbit" },
  { $set: { price: 15.99 } }
)

// Delete a book by its title
db.books.deleteOne({ title: "Moby Dick" })




//Advanced Queries

// Find books that are both in stock and published after 2010
db.books.find({ 
  in_stock: true, 
  published_year: { $gt: 2010 } 
})

// Using projection to return only title, author, and price
db.books.find(
  { },
  { title: 1, author: 1, price: 1, _id: 0 }
)

// Sorting books by price (ascending)
db.books.find().sort({ price: 1 })

// Sorting books by price (descending)
db.books.find().sort({ price: -1 })

// Pagination - page 1 (first 5 books)
db.books.find().sort({ title: 1 }).limit(5).skip(0)

// Pagination - page 2 (next 5 books)
db.books.find().sort({ title: 1 }).limit(5).skip(5)

// Pagination - page 3 (next 5 books)
db.books.find().sort({ title: 1 }).limit(5).skip(10)


//Aggregation Pipeline

// Calculate average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" },
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { averagePrice: -1 }
  }
])

// Find the author with the most books in the collection
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { bookCount: -1 }
  },
  {
    $limit: 1
  }
])

// Group books by publication decade and count them
db.books.aggregate([
  {
    $project: {
      title: 1,
      author: 1,
      published_year: 1,
      decade: {
        $subtract: [
          "$published_year",
          { $mod: ["$published_year", 10] }
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      bookCount: { $sum: 1 },
      books: { $push: "$title" }
    }
  },
  {
    $sort: { _id: 1 }
  }
])


//Indexing

// Create an index on the title field for faster searches
db.books.createIndex({ title: 1 })

// Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 })

// Demonstrate performance improvement with explain()

// Without index (if no appropriate index exists)
db.books.find({ title: "The Hobbit" }).explain("executionStats")

// With title index
db.books.find({ title: "The Hobbit" }).explain("executionStats")


// Check existing indexes
db.books.getIndexes()