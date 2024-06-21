import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";

const Books = () => {

    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:6001/books/")
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">All Books</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map(book => (
          <BookCard key={book._id} book={book} books={books} setBooks={setBooks}>

          </BookCard>
          ))}
        </div>
      </div>
    );
};

export default Books;