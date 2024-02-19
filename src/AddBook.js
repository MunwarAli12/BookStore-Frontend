import axios from 'axios';
import React, { useState } from 'react';
import './AddBook.css';

const AddBook = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [message, setMessage] = useState('');

  const handleAddBook = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/books', {
        id: id,
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
      if (error.response && error.response.status === 400) {
        setMessage('Book with same ID already exists.');
      } else {
        setMessage('Error While Adding Book!!...');
      }
    }
  };

  return (
    <div>
      <h5>ADD NEW BOOK,</h5>
      <div>
        <label>ID:</label>
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
      <button onClick={handleAddBook}>Add Book</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddBook;
