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
const incorrect = select('.incorrect');

const username = select('.username');
const password = select('.password');

const login = select('.login');

// Local Storage
const credentials = {
    username: 'makoeuro',
    password: 'n0b0dywillguessth1s'
};

let savedCred = localStorage.setItem('credentials', JSON.stringify(credentials));
let getCred = localStorage.getItem('credentials');
let parsedCred = JSON.parse(getCred);

// console
console.log(parsedCred);

onEvent('click', login, function() {
    if(username.value === parsedCred.username && password.value === parsedCred.password) {
        window.location.href = './home.html';
    } else {
        console.log('working');
        incorrect.style.display = 'flex';
    }
});