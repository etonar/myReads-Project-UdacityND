import React from "react";
import SingleBook from "../SingleBook";

const Read = ({ readShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      {readShelf.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>Empty Shelf</h3>
      ) : (
        <div className="bookshelf-books">
          <ol className="books-grid">
            {readShelf.map((book) => (
              <SingleBook key={book.id} book={book} />
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default Read;
