import React, { Component } from "react";
import Book from "./Book.js";

class ListBooks extends Component {
  constructor(props) {
    super(props);
    this.state = { allBooks: [] };
  }

  render() {
    const { allBooks } = this.props;
    const currentlyReading = allBooks.filter(results => {
      return results.shelf === "currentlyReading";
    });

    const wantToRead = allBooks.filter(results => {
      return results.shelf === "wantToRead";
    });

    const read = allBooks.filter(results => {
      return results.shelf === "read";
    });

    console.log(read);
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {currentlyReading.map(bookResult => {
                    return <Book key={bookResult.id} book={bookResult} />;
                  })}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {" "}
                  {wantToRead.map(bookResult => {
                    return <Book key={bookResult.id} book={bookResult} />;
                  })}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {" "}
                  {read.map(bookResult => {
                    return <Book key={bookResult.id} book={bookResult} />;
                  })}
                </ol>
              </div>
            </div>
          </div>
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

export default ListBooks;
