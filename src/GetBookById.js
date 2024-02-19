import axios from 'axios';
import React, { useState } from 'react';
import './GetBooksById.css';

const GetBookById = () => {
  const [id, setId] = useState('');
  const [book, setBook] = useState(null);
  const [error, setError] = useState('');

  const handleGetBookById = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/books/${id}`);
      setBook(response.data);
      setError('');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setError(`Book with ID ${id} not found.`);
      } else {
        setError('Book Not Found!...');
      }
      setBook(null);
    }
  };

  return (
    <div>
      <h5>GET BOOK BY ID, </h5>
      <div>
        <label>Enter Book ID :</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      
      <button onClick={handleGetBookById}>Get Book</button>
      
      {error && <p>{error}</p>}
      {book && (
        <div>
          <h3>Book Details</h3>
          <p>ID: {book.id}</p>
          <p>Title: {book.title}</p>
          <p>Author: {book.author}</p>
          <p>Pages: {book.pages}</p>
          
        </div>
      )}
    </div>
  );
};

export default GetBookById;
