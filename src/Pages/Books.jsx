import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App'; // Import ThemeContext
import { toast, ToastContainer } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import './Books.css';

const Books = () => {
  const [books, setBooks] = useState([]);
  const { theme } = useContext(ThemeContext); // Get current theme

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get('http://localhost:8800/books');
        setBooks(res.data);
      } catch (err) {
        console.error('Error fetching books:', err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      setBooks(books.filter((book) => book.id !== id));
      toast.success('Book deleted successfully!'); // Show success toast
    } catch (err) {
      console.error('Error deleting book:', err);
      toast.error('Failed to delete the book. Please try again.'); // Show error toast
    }
  };

  return (
    <div className={`books-container ${theme}`}>
      <h1 className="title">Book Shop</h1>
      <div className="books-grid">
        {books.map((book) => (
          <div className={`book-card ${theme}`} key={book.id}>
            <div className="book-image-container">
              {book.cover && <img className="book-cover" src={book.cover} alt="Book cover" />}
              <div className="book-desc-overlay">
                <p className="book-desc">{book.desc}</p>
              </div>
            </div>
            <h2 className="book-title">{book.title}</h2>
            <div className="buttons">
              <Link to={`/update/${book.id}`} className="btn update-btn">Update</Link>
              <button onClick={() => handleDelete(book.id)} className="btn delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* ToastContainer to render toast notifications */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default Books;
