// React imports
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

function StarRating(props) {
    const rating = props.rating;        // Grab the passed rating
    const full = Math.floor(rating);    // Get the highest whole count
    const half = rating % 1;            // Get any fractional data
    const starCount = [...Array(5)];    // Create a 5 star account

    // Check if rating is defined
    return props.rating ?
        // Star count
        (
            <div>
                {starCount.map((_, i) => {
                    // Add full stars
                    if (i + 1 <= full) {
                        return <FontAwesomeIcon
                            key={i}
                            className="normal"
                            icon={faStar} />;
                    }
                    // Add half star
                    else if (i + 1 === full + 1 && half !== 0) {
                        return <FontAwesomeIcon
                            key={i}
                            className="normal"
                            icon={faStarHalf} />;
                    }
                    // Otherwise, add empty star
                    else {
                        return <FontAwesomeIcon
                            key={i}
                            className="empty"
                            icon={faStar}/>;
                    }
                })}
            </div>
        )
        :
        // Empty stars
        (
            <div>
                <FontAwesomeIcon className="empty" icon={faStar} />
            </div>
        )

}

StarRating.propTypes = {
    rating: PropTypes.number
}

export default StarRating;