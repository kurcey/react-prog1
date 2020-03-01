import React from "react";
import * as BooksAPI from "./BooksAPI";
import ListBooks from "./component/ListBooks";
import SearchBooks from "./component/SearchBooks";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    allBooks: [],
    searchResults: []
  };

  componentDidMount() {
    this.refreshBookList();
  }

  refreshBookList() {
    BooksAPI.getAll().then(result => {
      this.setState({ allBooks: result });
    });
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.refreshBookList());
  };

  searchBooks = event => {
    const { value } = event.target;
    if (value !== "" && value !== null)
      BooksAPI.search(value).then(result => {
        if (result.error) {
          console.log(result);
          this.setState({ searchResults: [] });
        } else {
          const results = result.map(searchResults => {
            const foundBook = this.state.allBooks.find(
              x => x.id === searchResults.id
            );
            if (foundBook) return foundBook;
            else return searchResults;
          });
          this.setState({ searchResults: results });
        }
      });
    else this.setState({ searchResults: [] });
  };

  displayList = () =>
    this.setState({ searchResults: [], showSearchPage: false });

  render() {
    return (
      <div className="app">
        <div className="list-books">
          {this.state.showSearchPage ? (
            <SearchBooks
              searchBooks={this.searchBooks}
              searchResults={this.state.searchResults}
              changeShelf={this.changeShelf}
              displayList={this.displayList}
            />
          ) : (
            <ListBooks
              allBooks={this.state.allBooks}
              changeShelf={this.changeShelf}
            />
          )}
        </div>
        <div className="open-search">
          <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button>
        </div>
      </div>
    );
  }
}

export default BooksApp;
