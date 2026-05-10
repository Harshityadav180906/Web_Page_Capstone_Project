const BookCard = ({ book }) => {
  const thumbnail = book.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192?text=No+Cover';

  return (
    <div className="book-card">
      <img src={thumbnail} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.authors?.join(', ') || 'Unknown Author'}</p>
      <a 
        href={book.infoLink} 
        target="_blank" 
        rel="noreferrer" 
        className="details-link"
      >
        View Details →
      </a>
    </div>
  );
};

export default BookCard;
