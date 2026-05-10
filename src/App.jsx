import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import BookCard from './components/BookCard';
import './index.css';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchTerm) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=15`
      );
      const data = await response.json();
      setBooks(data.items || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch('React Programming');
  }, []);

  return (
    <div className="app-container">
      <Navbar onSearch={handleSearch} />
      
      {loading ? (
        <div style={{ textAlign: 'center', padding: '50px' }}>Loading Books...</div>
      ) : (
        <div className="book-grid">
          {books.map((book) => (
            <BookCard key={book.id} book={book.volumeInfo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
