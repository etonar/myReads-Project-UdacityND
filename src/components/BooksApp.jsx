import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentlyReading, WantToRead, Read } from "./shelfs";
import { bookContext } from "../App";

const BooksApp = () => {
  const { books } = useContext(bookContext);
  const [currentlyShelf, setCurrentlyShelf] = useState([]);
  const [wantShelf, setWantShelf] = useState([]);
  const [readShelf, setReadShelf] = useState([]);

  useEffect(() => {
    setCurrentlyShelf(
      books.filter((book) => book.shelf === "currentlyReading")
    );
    setWantShelf(books.filter((book) => book.shelf === "wantToRead"));
    setReadShelf(books.filter((book) => book.shelf === "read"));
  }, [books]);

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <CurrentlyReading currentlyShelf={currentlyShelf} />
            <WantToRead wantShelf={wantShelf} />
            <Read readShelf={readShelf} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            <button></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BooksApp;
