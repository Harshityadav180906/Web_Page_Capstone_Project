
import { useState } from 'react';

const Navbar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <nav className="navbar">
      <div className="logo">BOOKVAULT</div>
      
      <form onSubmit={handleSubmit} className="search-form">
        <input 
          type="text"
          placeholder="Search for books..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </nav>
  );
};

export default Navbar;
