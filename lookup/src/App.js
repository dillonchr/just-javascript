import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';
import {
    BrowserRouter,
    Route,
    Link,
    Switch,
} from 'react-router-dom';
import AddNewItem from './AddNewItem';
import { Api } from './Api';


function App() {
    //  useState hook
    const [id, setId] = React.useState('');
    const [product, setProduct] = React.useState(null);

    const dude = (event) => {
        event.preventDefault();

        const productId = id;

        Api.get(`http://localhost:3009/product/${productId}`)
            .then((product) => {
                setProduct(product);
            })
            .catch((err) => {
                setProduct(null);
            });
    };


    return (
        <div className="App">
            <form onSubmit={dude}>
                <input value={id} onChange={(e) => { setId(e.target.value.replace(/[^0-9]/g, ''))}} placeholder="Product ID" />
                <button>Search</button>
            </form>
                {!product && <Link to="/add">Add a new product</Link>}
                <Product product={product} />
            </div>
    );
}

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <Route exact path="/add">
                     <AddNewItem />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
