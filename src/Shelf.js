import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Book from './Book.js'

class Shelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  render() {
    return(
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
          <div className="bookshelf-books">
            <ul className='books-grid'>
              {this.props.books.map((book) => (
                <li key={book.id}>
                  <Book book={book} updateShelf={this.props.updateShelf}></Book>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Shelf;
