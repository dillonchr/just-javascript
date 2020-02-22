import React from 'react';

export default ({ product }) => {
    if (!product) {
        return null;
    }

    return (
        <React.Fragment>
            <h1>{product.name}</h1>
            <h2>${product.cost} (cost)</h2>
            <h2>${product.price} (price)</h2>
        </React.Fragment>
    );
};

