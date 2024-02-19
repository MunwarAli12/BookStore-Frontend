import axios from 'axios';
import React, { useState } from 'react';
import './GetBooksByAuthor.css';

const GetBooksByAuthor = () => {
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');

  const handleGetBooksByAuthor = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/books/searchByAuthor/${author}`);
      setBooks(response.data);
      setError('');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError(`Books by author '${author}' not found.`);
      } else {
        setError('Book Not Found!...');
      }
      setBooks([]);
    }
  };

  return (
    <div>
      <h5>GET BOOKS BY AUTHOR, </h5>
      <div>
        <label>Enter Author Name:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      
      <button onClick={handleGetBooksByAuthor}>Get Books</button>
      
      {error && <p>{error}</p>}
      {books.length > 0 && (
        <div>
          <h4>Books Found by {author}, </h4>
          {books.map(book => (
            <div key={book.id} className="book-details">
              <p>ID: {book.id}</p>
              <p>Title: {book.title}</p>
              <p>Author: {book.author}</p>
              <p>Pages: {book.pages}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetBooksByAuthor;
