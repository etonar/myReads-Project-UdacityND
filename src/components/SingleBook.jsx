import React from "react";
import * as BooksAPI from "../BooksAPI";
import defaultCover from "../icons/default_book_cover.jpg";

const SingleBook = ({ book }) => {
  const updateShelfs = (book, shelf) => {
    BooksAPI.update(book, shelf);
  };

  const { title, authors = [], imageLinks = {} } = book;

  const bookTitle = title ? title : "No Title!";
  const bookCover =
    imageLinks && imageLinks.smallThumbnail
      ? imageLinks.smallThumbnail
      : defaultCover;
  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url(${bookCover})`
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              onChange={(e) => {
                updateShelfs(book, e.target.value);
              }}
            >
              <option value="move" disabled selected>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{bookTitle}</div>
        <div className="book-authors">{[...authors].join(", \n")}</div>
      </div>
    </li>
  );
};

export default SingleBook;