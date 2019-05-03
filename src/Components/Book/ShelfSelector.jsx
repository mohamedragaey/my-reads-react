// React imports
import React from 'react';
import PropTypes from 'prop-types';

function ShelfSelector(props) {
    const { shelf, changed } = props;

    return (
        <div className="book-shelf-changer">
            <select defaultValue={shelf} onChange={evt => changed(evt.target.value)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    );
}

ShelfSelector.propTypes = {
    shelf: PropTypes.string,
    changed: PropTypes.func.isRequired
}

ShelfSelector.defaultProps = {
    shelf: 'none'
}

export default ShelfSelector;