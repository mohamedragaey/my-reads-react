// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Support imports
import './Book.css';
// Component imports
import StarRating from './StarRating';
import BookMeta from './BookMeta';
import BookCover from './BookCover';
import InfoButton from './InfoButton';
import ShelfSelector from './ShelfSelector';

/**
 * @class
 * Book element
 */
export default class Book extends Component {
    /**
     * Constructor
     * @param {Object} props Passed from parent component
     */
    constructor(props) {
        super();
        this.state = {
            shelf: props.book.shelf
        }
    }

    // Set default values for properties
    static defaultProps = {
        book: {},
        changeShelf: () => { }
    };

    // Set types for properties
    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired
    }

    /**
     * Component lifecycle: Control behavior after state update
     * @param {Object} prevProps Props before update
     * @param {Object} prevState State before update
     */
    componentDidUpdate(_, prevState) {
        // Shelf value changed by user
        if (prevState.shelf !== this.state.shelf) {
            const changeBook = this.props.book;         // Get the book value
            const shelf = this.state.shelf;             // Get the current shelf selector value
            this.props.changeShelf(changeBook, shelf);  // Pass to parent component
        }
    }

    /**
     * Render component
     */
    render() {
        const book = this.props.book;
        const { id, title, authors, imageLinks, averageRating, } = book;

        return (
            <li>
                <div className="book">

                    {/* Book Main */}
                    <div className="book-top uk-flex-column">

                        {/* Star rating */}
                        <StarRating rating={averageRating} />

                        {/* Toggle info overlay button */}
                        <InfoButton id={id} />

                        {/* Book Cover */}
                        <BookCover
                            imageLinks={imageLinks}
                            book={book} />

                        {/* Book shelf selector */}
                        <ShelfSelector
                            shelf={this.state.shelf}
                            changed={value => this.setState({ shelf: value })} />
                    </div>

                    {/* Book Meta */}
                    <BookMeta title={title} authors={authors} />
                </div>
            </li>
        )
    }
}