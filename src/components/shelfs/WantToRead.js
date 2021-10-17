import React from "react";
import SingleBook from "../SingleBook";

const WantToRead = ({ wantShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Want To Read</h2>
      {wantShelf.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>Empty Shelf</h3>
      ) : (
        <div className="bookshelf-books">
          <ol className="books-grid">
            {wantShelf.map((book) => (
              <SingleBook key={book.id} book={book} />
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default WantToRead;
