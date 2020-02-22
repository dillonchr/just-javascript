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
    const email = document.querySelector('#email').value;
    const password = document.querySelector('input[type="password"]').value;

    Api.get(`http://localhost:3009/login?email=${email}&password=${password}`)
        .then((json) => {
            for (let i = 0; i < Object.keys(json).length; i++) {
                console.log('key', Object.keys(json)[i]);
            }
            for (let key of Object.entries(json)) {
                console.log('asdfasdfasdfasdf', key);
            }
            alert(`Hello ${json.email}`);
        })
        .catch((err) => {
            alert('u failed');
            console.error(err);
        });
});
