'use strict';

// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function sleep(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    })
}

// Selectors
const username = select('.username');
const password = select('.password');

const login = select('.login');

// Local Storage
const credentials = {
    username: 'mako',
    password: '12345'
};

let savedCred = localStorage.setItem('credentials', JSON.stringify(credentials));
let getCred = localStorage.getItem('credentials');


console.log(JSON.parse(getCred));

onEvent('click', login, function() {
    if(username.value === JSON.parse(getCred[0]) && password.value === credentials.password) {
        window.location.href = './home.html';
    } else {
        console.log('working');
    }
});