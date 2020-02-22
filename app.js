//  make some global vars/funcs
//  present an iife
//  chrome snippets are there when you need it, i guaran-TEE it

const Api = {
    get(url) {
        return fetch(url).then((res) => res.json());
    }
};

var form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const productId = document.getElementById('productID').value;

    Api.get(`http://localhost:3009/product/${productId}`)
        .then((product) => {
            alert(`${product.name} costs ${product.cost} but we make ${product.price}`);
        })
        .catch((err) => {
            alert('u failed');
            console.error(err);
        });
});
