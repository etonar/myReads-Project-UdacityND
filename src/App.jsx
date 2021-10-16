import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

//Pages
import BooksApp from "./components/BooksApp";
import SearchPage from "./components/SearchPage";

import "./App.css";

export const bookContext = React.createContext();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [searchedBooks, setSearchedBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, [books, searchedBooks]);

  const getBooks = async () => {
    const allBooks = await BooksAPI.getAll();
    setBooks(allBooks);
    setIsLoading(false);
  };

  const searchBooks = async (query) => {
    const searchedBooks = await BooksAPI.search(query);
    if (Array.isArray(searchedBooks)) {
      setSearchedBooks(searchedBooks);
    } else {
      setSearchedBooks([]);
    }
  };

  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="loading"></div>
      </div>
    );
  }
  return (
    <>
      <bookContext.Provider value={{ books, searchBooks, searchedBooks }}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <BooksApp />
            </Route>
            <Route path="/search">
              <SearchPage />
            </Route>
          </Switch>
        </Router>
      </bookContext.Provider>
    </>
  );
};

export default App;
