import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () => {
  const [book, setBook] = useState({
    title: '',
    desc: '',
    price: null,
    cover: '',
  });
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    
    // Validation to check if all fields are filled
    if (!book.title) {
      toast.error('Title is required');
      return;
    }
    if (!book.desc) {
      toast.error('Description is required');
      return;
    }
    if (!book.price) {
      toast.error('Price is required');
      return;
    }
    if (!book.cover) {
      toast.error('Cover Image URL is required');
      return;
    }

    try {
      await axios.post('http://localhost:8800/books', book);
      toast.success('Book added successfully!');
      navigate('/'); // Navigate to the homepage after successful creation
    } catch (err) {
      console.error(err);
      toast.error('Failed to add the book. Please try again later.');
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Add New Book</h1>
      <form className="form">
        <input
          type="text"
          placeholder="Enter a title"
          name="title"
          value={book.title}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Enter a description"
          name="desc"
          value={book.desc}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="number"
          placeholder="Enter Price"
          name="price"
          value={book.price}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Cover Image URL"
          name="cover"
          value={book.cover}
          onChange={handleChange}
          className="form-input"
        />
        <button type="button" className="form-button" onClick={handleClick}>Add Book</button>
      </form>

      {/* Toast Container to display notifications */}
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Add;
