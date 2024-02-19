import axios from 'axios';
import React, { useState } from 'react';

const UpdateBook = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdateBook = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/api/books/${id}`, {
        title: title,
        author: author,
        pages: pages
      });
      setMessage(response.data);
      setId('');
      setTitle('');
      setAuthor('');
      setPages('');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setMessage(`Book with ID ${id} not found.`);
      } else {
        setMessage('Book Not found / Please try again properly');
      }
    }
  };

  return (
    <div>
      <h5>Enter Details to update book, </h5>
      <div>
        <label>Enter Id:</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        <label>Pages:</label>
        <input type="text" value={pages} onChange={(e) => setPages(e.target.value)} />
      </div>
      <button onClick={handleUpdateBook}>Update Book</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateBook;
