import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

        //Shelved books from main page
        const shelfBooks = this.props.books;
        
        BooksAPI.search(query, 20).then((books) => {
    
            if(typeof books !== 'undefined' && books.error !== 'undefined'){
                if(books.error === "empty query"){
                    this.setState({
                        books: [],
                        isError: true
                    });
                } else if (typeof books !== "undefined"){
                    books.forEach(function(book){
                        var thisBook = shelfBooks.filter(a => a.id === book.id);
                        if(thisBook.length > 0){
                            book.shelf = thisBook[0].shelf;
                        } else {
                            book.shelf = "none";
                        }
                    })
                    this.setState({ 
                        books: books,
                        isError: false
                    })
                } 
            }else{
                this.setState({
                    books: [],
                    isError: false
                }) 
             }
            
            
        })
    }

    updateSearchShelf = (book, shelf) => {
        const shelfBooks = this.props.shelfBooks.filter((a) => a.id !== book.id).concat(book);
        const books = this.state.books;

        books.forEach(function(book){
            var thisBook = shelfBooks.filter(a => a.id === book.id);
            if(thisBook.length > 0){
                book.shelf = thisBook[0].shelf;
            } else {
                book.shelf = "none";
            }
        })

        this.setState({ 
            books: books
        })

        this.props.updateShelf(book,shelf);
        
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
                                <Book book={book} updateShelf={this.props.updateShelf}></Book>
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
