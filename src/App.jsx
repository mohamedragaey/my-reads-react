import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI';
import 'uikit/dist/css/uikit.css';
import './App.css';
import {moveMessage, errorMessage, addMessage} from './Notifications'

import Bookshelf from './Components/Bookshelf/BookShelf';
import SearchPage from './Components/SearchPage/SearchPage';

/**
 * @class
 * App element
 */
class BooksApp extends Component {
  state = {
    books: [],
  }

  /**
   * Component lifecycle: After render API request for data
   */
  componentDidMount() {
    BooksAPI.getAll()
      .then(books => this.setState({ books }))
      .catch(errorMessage);
  }

  /**
   * Component lifecycle: API request to use latest data on update 
   * @param {Object} prevProps Props prior to state update
   * @param {Object} prevState State prior to state update
   */
  componentDidUpdate(_, prevState) {

    // Check if item removed or added to control requests
    if (prevState.books.length !== this.state.books.length) {

      // Get all shelved books from API, then update state with results
      BooksAPI.getAll()
        .then(books => this.setState({ books }))
        .catch(errorMessage);
    }
  }

  /**
   * Updates App state based on the change of Book element shelf selector
   * @param {Object} changeBook The book to manipulate
   * @param {String} newValue The new shelf value for the book
   */
  changeShelf(changeBook, newValue) {
    // Push change to through API
    BooksAPI.update(changeBook, newValue)
    .catch(errorMessage);

    // Update state
    this.setState(prevState => {
      let books = []; // For modifying data before pushing to state

      // Book to change was not in the previous state
      if (!prevState.books.includes(changeBook)) {      
        changeBook['shelf'] = newValue;                 // Add and set the new shelf value
        books.concat(prevState.books).push(changeBook); // Combine with the previous state

        addMessage(newValue);
      }
      // Otherwise
      else {
        // Return a modified array from previous state
        books = prevState.books.map(book => {

          // Find the matching item
          if (book === changeBook) {
            book.shelf = newValue;  // Modify the shelf value
            return book;            // Push into new array
          }
          else {
            return book;            // Otherwise, push unmodified
          }
        })

        moveMessage(newValue);
      }

      return { books }; // Pass new value to the state
    });

  }

  /**
   * Takes an array of books separates into corresponding shelves
   * @param {Array} books Objects to seperate
   * @returns {Array} of objects representing shelves
   */
  putBooksOnShelf(books) {

    //Separate the books by shelf listed 
    const booksReading = books.filter(book => book.shelf === 'currentlyReading');
    const booksWant = books.filter(book => book.shelf === 'wantToRead');
    const booksRead = books.filter(book => book.shelf === 'read');


    return [
      {
        title: 'Currently Reading',
        books: booksReading
      },
      {
        title: 'Want to Read',
        books: booksWant
      },
      {
        title: 'Read',
        books: booksRead
      }
    ]
  }

  /**
   * Render component
   */
  render() {
    let shelves = this.putBooksOnShelf(this.state.books); // Separate books into shelf
    return (
      <div className="app">
        <Route exact path='/' render={() => (<Bookshelf shelves={shelves} changeShelf={(changeBook, newValue) => (this.changeShelf(changeBook, newValue))} />)} />
        <Route path='/search' render={() => (<SearchPage books={this.state.books} changeShelf={(changeBook, newValue) => (this.changeShelf(changeBook, newValue))} />)} />
      </div>
    )
  }
}

export default BooksApp;
