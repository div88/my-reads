import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import Book from './Book.js'
import * as BooksAPI from './BooksAPI.js'

class BookSearch extends Component {
    state = {
        query: '',
        books: [],
        isError: false
    }

    updateQuery = (query) => {
        this.setState({
            query: query
        })

        BooksAPI.search(query, 20).then((books) => {
            console.log(books);
            if(typeof books !== 'undefined' && books.error !== 'undefined'){
                if(books.error === "empty query"){
                    this.setState({
                        books: [],
                        isError: true
                    });
                } else if (typeof books !== "undefined"){
                    this.setState({ books: books })
                } 
            }else{
                this.setState({
                    books: [],
                    isError: false
                }) 
             }
            
            
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
                

                    {this.state.isError && (
                        <p className="error-label">No results available for this search. Try a different search term.</p>
                    )}
                </div>
            </div>
        )
    }
}

export default BookSearch;
