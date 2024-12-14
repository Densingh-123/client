import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
  const [book, setBook] = useState({
    title: '',
    desc: '',
    price: null,
    cover: '',
  });

  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2]; // Extract book ID from URL

  // Fetch the book data to populate the form (for update)
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/books/${bookId}`);
        setBook(response.data); // Set the form values with existing book data
      } catch (err) {
        console.error("Error fetching book:", err);
      }
    };
    fetchBook();
  }, [bookId]);

  // Handle input change
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submission
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8800/books/${bookId}`, book); // Correct PUT request with bookId
      navigate("/"); // Redirect to home page after update
    } catch (err) {
      console.error('Error updating book:', err);
    }
  };

  return (
    <div className="form-container update">
      <h1 className="form-title">Update Book</h1>
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
        <button type="button" className="form-button" onClick={handleClick}>Update</button>
      </form>
    </div>
  );
};

export default Update;
