import React, { Component } from 'react';

class Book extends Component {
  render() {
    var book = this.props.book

    return(
      <div>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select value={book.shelf} onChange={(event) => this.props.updateShelf(book,event.target.value)}>
                <option value="">Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
        </div>
          <p className="book-title">{book.title}</p>
          <p className="book-authors">{book.authors}</p>
        </div>
      </div>
    )
  }
}

export default Book;
