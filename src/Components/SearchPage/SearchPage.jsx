// React imports
import React, { Component } from 'react';

// Support imports
import './SearchPage.css';

// Component imports
import SearchBar from '../SearchBar/SearchBar';
import BookGroup from '../BookGroup/BookGroup';

/**
 * @class
 * SearchPage element
 */
export default class SearchPage extends Component {

  /**
   * Constructor
   * @param {Object} props Properties passed from parent component
   */
  constructor(props) {
    super(props)

    this.state = {
      books: []
    }
  }

  /**
   * Sync main page books shelf data with query results if they match
   * @param {Array} queryBooks Results from API query
   * @returns {Array} List of queryBooks with matching shelf data from main page
   */
  syncBooks(queryBooks) {
    return (
      queryBooks.map(book => {

        // Check if book matches any on main page
        const myBook = this.props.books.find(item => item.id === book.id);

        // Match found
        if (myBook) {
          book['shelf'] = myBook.shelf; // Add shelf propery to match main page value
        }

        return book;  // Push book into results
      })
    );
  }

  /**
   * Changes state based on search results
   * @param {Array} books List of search results 
   */
  newQuery(books) {

    // Defined results in array format
    if (books && Array.isArray(books)) {

      const syncedBooks = this.syncBooks(books);
      this.setState({ books: syncedBooks });     // Change state to results
    } else {
      this.setState({ books: [] }); // Clear state
    }
  }

  /**
   * Render component
   */
  render() {
    const books = this.state.books
    return (
      <div>
        {/* Search bar element */}
        <SearchBar newQuery={(book) => (this.newQuery(book))} />
        {/* Search results container */}
        <div className="uk-container uk-margin-large-top">

          {/* List of books from query */}
          <BookGroup
            books={books}
            changeShelf={this.props.changeShelf} />

        </div>

        {/* Scroll to top link */}
        <a
          className="to-top uk-icon-link uk-animation-slide-bottom"
          href="#top"
          data-uk-icon="icon: chevron-up; ratio: 2.5"
          hidden={books.length < 1}
          data-uk-scroll="duration: 250">
        </a>
      </div>
    )
  }
}
