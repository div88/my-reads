import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import Book from './Book.js'
import * as BooksAPI from './BooksAPI.js'

class BookSearch extends Component {
    state = {
        query: '',
        books: []
    }

    updateQuery = (query) => {
        this.setState({
            query: query
        })

        BooksAPI.search(query, 20).then((books) => {
            console.log(books);
            this.setState({ books: books })
        })
    }

    render() {
        return(
            <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}/>
                </div>
            </div>
            <div className="search-books-results">
                
                <ol className='books-grid'>
                    {this.state.books.map((book) => (
                        <li key={book.id}>
                        <Book book={book}></Book>
                        </li>
                    ))}
                </ol>
            </div>
            </div>
        )
    }
}

export default BookSearch;
