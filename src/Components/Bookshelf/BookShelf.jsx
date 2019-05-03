// React imports
import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

// Support imports
import './Bookshelf.css';

// Component imports
import Shelf from '../Shelf/Shelf';

/**
 * Bookshelf constructor function
 * @param {Object} props Properties passed from parent component
 */
function Bookshelf(props) {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {props.shelves.map(shelf => <Shelf key={shelf.title} shelf={shelf} changeShelf={props.changeShelf} />)}
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
}

// Set default values for properties
Bookshelf.defaultProps = {
    shelves: [
        { title: "Currently Reading", books: [] },
        { title: "Want to Read", books: [] },
        { title: "Read", books: [] }
    ],
    changeShelf: () => { }
}

// Set types for properties
Bookshelf.propTypes ={
    shelves: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        books: PropTypes.arrayOf(PropTypes.object)
    })).isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default Bookshelf;
