import React from 'react';
import '../css/LikesBar.css';

function LikesBar({ likeNumber }) {
    return (
        <div className="likes__bar">
            { likeNumber == 1 ? likeNumber + " like" : likeNumber + " likes"}
        </div>
    )
}

export default LikesBar
