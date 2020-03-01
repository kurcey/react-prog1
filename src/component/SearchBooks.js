import React, { Component } from "react";
import Book from "./Book.js";

class SearchBooks extends Component {
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button className="close-search" onClick={this.props.displayList}>
            Close
          </button>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.props.searchBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.searchResults !== undefined &&
            this.props.searchResults.length > 0
              ? this.props.searchResults.map(book => {
                  return (
                    <Book
                      key={book.id}
                      book={book}
                      changeShelf={this.props.changeShelf}
                    />
                  );
                })
              : ""}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
