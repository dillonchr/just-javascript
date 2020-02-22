import React from 'react';
import { Link } from 'react-router-dom';
import { Api } from './Api';

export default () => {
    const [name, setName] = React.useState('');
    const [cost, setCost] = React.useState('');
    const [price, setPrice] = React.useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        Api.get(`http://localhost:3009/add/${name}/${cost}/${price}`)
            .then((response) => {
                setName('');
                setCost('');
                setPrice('');
                alert(`Saved product #${response.id}`);
            })
            .catch((err) => {
                alert('Failed to save product.');
            });
    };

    return (
        <form onSubmit={onSubmit} style={{textAlign: 'center'}}>
            <Link to="/">GOBIAS SOME COFFEE</Link>
            <br />
            <label>Product Name: <input value={name} onChange={(e) => setName(e.target.value)} /></label>
            <br />
            <label>Product Cost: <input value={cost} onChange={(e) => setCost(e.target.value)} /></label>
            <br />
            <label>Product Price: <input value={price} onChange={(e) => setPrice(e.target.value)} /></label>
            <br />
            <button disabled={!name || !cost || !price}>Save</button>
        </form>
    );
};
