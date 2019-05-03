import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import './SearchBar.css';
import {errorMessage} from '../../Notifications'

/**
 * @class
 * SearchBar element
 */
export default class SearchBar extends Component {

    /**
     * Constructor function
     * @param {Object} props Properties from parent component
     */
    constructor(props) {
        super(props)

        this.state = {
            query: '',
            typing: false
        }
    }

    /**
     * Compnent lifecycle: Handle behavior after state update
     * @param {Object} prevProps Properties before update
     * @param {Object} prevState State before update
     */
    componentDidUpdate(_, prevState) {
        // Input value changed and it is not empty
        if (prevState.query !== this.state.query && this.state.query !== '') {

            this.setState({ typing: true });                        // Reveal clear button
            // Use API to search for value
            BooksAPI.search(this.state.query)
                .then(results => (this.props.newQuery(results)))
                .catch(errorMessage);   // Pass results to parent component
        }

        // Input value changed and is empty
        if (prevState.query !== this.state.query && this.state.query === '') {
            this.setState({ typing: false });                         // Hide clear button
            this.props.newQuery(null);                              // Push up nothing to clear
        }
    }

    /**
     * Clear user input on click of clear button
     * @param {Object} evt  Calling event
     */
    clearInput(evt) {
        evt.preventDefault();
        this.setState({ query: '' });
    }

    /**
     * Render component
     */
    render() {
        return (
            <div
                className="uk-box-shadow-xlarge uk-flex uk-background-default"
                data-uk-sticky="bottom: true; animation: uk-animation-slide-left-top">

                {/* Go back to main page link */}
                <Link
                    className="uk-icon-link"
                    to="/"
                    data-uk-icon="icon: arrow-left; ratio: 3">
                </Link>

                {/* Search form */}
                <form className="search-books-bar uk-search uk-width-1-1 uk-flex-inline uk-flex-middle">

                    {/* Search icon */}
                    <span
                        className="uk-margin-small-right uk-animation-scale-up uk-animation-fast"
                        hidden={this.state.typing}
                        data-uk-icon="icon: search; ratio: 1.25">
                    </span>

                    {/* Search iput */}
                    <input
                        value={this.state.query}
                        className="uk-search-input"
                        type="search"
                        placeholder="Search by title or author"
                        onChange={evt => (this.setState({ query: evt.target.value }))} />

                    {/* Search clear button */}
                    <button
                        className="uk-position-center-right uk-margin-small-right"
                        data-uk-icon="icon: close; ratio: 1.25"
                        hidden={!this.state.typing}
                        onClick={evt => this.clearInput(evt)}>
                    </button>
                </form>
            </div>
        )
    }
}
