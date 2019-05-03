// React imports
import React from 'react';
import PropTypes from 'prop-types';

function BookMeta(props) {
    const {title, authors} = props;
    return (
        <div className=" uk-margin-medium-top">

            {/* Book Title */}
            <div className="uk-text-small uk-margin-small-bottom">{title}</div>

            {/* Book Authors */}
            {authors
                .map(author =>
                    (
                        <div
                            key={author}
                            className="uk-text-meta">
                            {author}
                        </div>
                    )
                )
            }
        </div>
    );
}

BookMeta.defaultProps = {
    title: 'none',
    authors: ['unkown']
}

BookMeta.propTypes = {
    title: PropTypes.string,
    authors: PropTypes.arrayOf(PropTypes.string)
}

export default BookMeta;