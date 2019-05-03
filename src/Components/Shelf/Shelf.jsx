import React from 'react';
import PropTypes from 'prop-types';
import BookGroup from '../BookGroup/BookGroup';
import './Shelf.css';

/**
 * Shelf element constructor
 * @param {Object} props Properties passed from parent component
 */
function Shelf(props) {
  const { title, books } = props.shelf  // Destruc properties

  return (
    <div className="uk-container uk-margin-small">
      <h2 className="bookshelf-title">{title}</h2>
      <BookGroup
        books={books}
        changeShelf={props.changeShelf} />
    </div>
  )
}

// Set default values for properties
Shelf.defaultProps = {
  shelf: {
    title: 'empty',
    books: []
  },
  changeShelf: () => { }
};

// Set types for properties
Shelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  changeShelf: PropTypes.func.isRequired
}

export default Shelf;
