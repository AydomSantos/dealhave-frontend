import React, { useState } from "react";
import "./avaliacao.css";

const Avaliacao = ({ initialRating = 0, onRatingChange, readonly = false }) => {
    const [rating, setRating] = useState(initialRating);
    const [hover, setHover] = useState(0);

    const handleRatingClick = (value) => {
        if (!readonly) {
            setRating(value);
            if (onRatingChange) {
                onRatingChange(value);
            }
        }
    };

    return (
        <div className="rating-container">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={`star ${star <= (hover || rating) ? 'filled' : ''} ${readonly ? 'readonly' : ''}`}
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => !readonly && setHover(star)}
                    onMouseLeave={() => !readonly && setHover(0)}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default Avaliacao;