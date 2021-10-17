import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { bookContext } from "../App";
import SingleBook from "./SingleBook";

const SearchBook = () => {
  const { searchBooks, searchedBooks } = useContext(bookContext);
  const [query, setQuery] = useState("");

  useEffect(() => {
    searchBooks(query);
  }, [query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onKeyUp={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
      </div>
      {searchedBooks.length > 0 && (
        <p className="alert">{searchedBooks.length} book(s) found</p>
      )}
      <div className="search-books-results">
        {searchedBooks.length === 0 ? (
          <div className="wrapper">
            <h2 style={{ textTransform: "capitalize" }}>no match found</h2>
          </div>
        ) : (
          <ol className="books-grid">
            {searchedBooks.map((book) => (
              <SingleBook key={book.id} book={book} action="add" />
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default SearchBook;
