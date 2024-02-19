import axios from 'axios';
import React, { useState } from 'react';

const DeleteBook = () => {
  const [id, setBookId] = useState('');
  const [message, setMessage] = useState('');

  const handleDeleteBook = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/books/${id}`);
      setMessage(response.data);

      setBookId('');
    } catch (error) {
      console.error('Error deleting book:', error);
      setMessage('Sorry! Book Not Found');
    }
  };

  return (
    <div>
      <h5>DELETE BOOK BY ID,</h5>
      <div>
        <label>Book ID:</label>
        <input type="text" value={id} onChange={(e) => setBookId(e.target.value)} />
      </div>
      <button onClick={handleDeleteBook}>Delete Book</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteBook;
 