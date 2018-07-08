import React from 'react';
import { Route, Link } from 'react-router-dom';
import Shelf from './Shelf.js'
import BookSearch from './BookSearch.js'
import * as BooksAPI from './BooksAPI.js'
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
    none: [],
    crvalue: 'currentlyReading',
    wrvalue: 'wantToRead',
    rvalue: 'read'
  }

  updateShelf = (book, shelf) => {
    let toShelf, fromShelf
    fromShelf = book.shelf
    toShelf = shelf
    BooksAPI.update(book, shelf).then(res => {
      book.shelf = toShelf
      this.setState(state => ({
        toShelf: state[toShelf].push(book),
        [fromShelf]: state[fromShelf].filter((b) => b.id !== book.id)
      }))
    })
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
      this.setState({ booksG: books })
      this.setState({
        currentlyReading: books.filter(book => book.shelf === "currentlyReading"),
        wantToRead: books.filter(book => book.shelf === "wantToRead"),
        read: books.filter(book => book.shelf === "read")
      })
    })
  }

  render() {
    return (
      <div className="app">
          <Route exact path="/" render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Shelf shelfTitle="Currently Reading" books={this.state.currentlyReading} updateShelf={this.updateShelf}></Shelf>
                  <Shelf shelfTitle="Want to read" books={this.state.wantToRead} updateShelf={this.updateShelf}></Shelf>
                  <Shelf shelfTitle="Read" books={this.state.read} updateShelf={this.updateShelf}></Shelf>   
                </div>
              </div>
              <div path="/search" className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}/>
          <Route path="/search" render={() => (
            <BookSearch books={this.state.books} updateShelf={this.updateShelf}></BookSearch>
          )}/>
      </div>
    )
  }
}

export default BooksApp
