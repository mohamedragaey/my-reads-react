// React imports
import React from 'react';
import PropTypes from 'prop-types';
//Componet imports
import Book from '../Book/Book'

function BookGroup(props) {
    const { books, changeShelf } = props;
    return (
        <ol className="uk-flex uk-flex-center" data-uk-grid>
            {books
                .map(book =>
                    <Book
                        key={book.id}
                        book={book}
                        changeShelf={changeShelf} />)
            }
        </ol>
    );
}

BookGroup.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

BookGroup.defaultProps = {
    books: [],
    changeShelf: () => {}
}

export default BookGroup;