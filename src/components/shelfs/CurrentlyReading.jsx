import React from "react";
import SingleBook from "../SingleBook";
const CurrentlyReading = ({ currentlyShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      {currentlyShelf.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>Empty Shelf</h3>
      ) : (
        <div className="bookshelf-books">
          <ol className="books-grid">
            {currentlyShelf.map((book) => (
              <SingleBook key={book.id} book={book} />
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default CurrentlyReading;
