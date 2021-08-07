import React from 'react';

export const Post = ({post}) => {
    return (
        <div className="card mb-2">
            <div className="card-body">
                <div className="card-title"><h3>Card #{post.title}</h3></div>
            </div>
        </div>
    );
};
