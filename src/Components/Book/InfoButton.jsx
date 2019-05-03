// React imports
import React from 'react';
import PropTypes from 'prop-types';

function InfoButton(props) {
    return (
        <button
            className="info uk-position-absolute uk-icon-link"
            type="link"
            data-uk-toggle={`target: #overlay${props.id}; animation: uk-animation-slide-top-small`}
            data-uk-icon="info">
        </button>
    );
}

InfoButton.propTypes = {
    id: PropTypes.string.isRequired
}

InfoButton.defaultProps = {
    id: String(Math.random() * Math.floor(100))
}

export default InfoButton;