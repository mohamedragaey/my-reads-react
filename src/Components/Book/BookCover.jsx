// React imports
import React from 'react';
import PropTypes from 'prop-types';

function BookCover(props) {
    const { imageLinks, book } = props;
    const { id, printType, pageCount, publishedDate, publisher, categories } = book;

    return (
        <div>
            {/* Book cover image */}
            <img
                className="book-cover"
                style={{ width: 128, height: 193 }}
                src={imageLinks.thumbnail} alt="Not Available">
            </img>

            <div id={`overlay${id}`} className="overlay uk-overlay uk-overlay-primary uk-position-cover uk-text-meta" hidden>


                <div className="uk-card uk-position-cover">

                    {/* Card Header */}
                    <div className="uk-card-header uk-padding-remove uk-margin-medium-top">

                        {/* Page Count */}
                        <p><small>Pages: {pageCount}</small></p>

                        {/* Overlay badge */}
                        <div className="uk-card-badge uk-label uk-position-top-right">{printType}</div>
                    </div>

                    {/* Card Body */}
                    <div className="uk-card-body uk-padding-remove">

                        {/* Published Date */}
                        {publishedDate ? <p><small>Published: {publishedDate}</small></p> : ''}

                        {/* Publisher */}
                        { publisher ? <p><small>Publisher: {publisher}</small></p> : ''}
                    </div>

                    {/* Card Footer for categories */}
                    {categories ?
                        <div className="uk-card-footer uk-padding-remove uk-position-bottom">
                            {/* Heading */}
                            <p className="uk-text-center">Categories:</p>

                            {/* list */}
                            <p>{categories ? categories.map(item => (<small key={item}>{item.toLowerCase()}</small>)) : ''}</p>
                        </div>
                        : ''}
                </div>


                {/* Overlay data */}
                <div className="uk-position-cover uk-margin-small-left uk-margin-small-top">



                </div>
            </div>
        </div>
    );
}

BookCover.defaultProps = {
    imageLinks: { thumbnail: 'http://i.imgur.com/J5LVHEL.jpg' }
}

BookCover.propTypes = {
    imageLinks: PropTypes.objectOf(PropTypes.string).isRequired,
    book: PropTypes.object.isRequired
}

export default BookCover;