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
const followers = select('.followers');
const following = select('.following');

const randomuser = select('.random-user');

// Functions --------------------------
const url = 'https://randomuser.me/api/?nat=CA&results=10&seed=same';

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
    mode: 'cors'
}

async function getUser() {
    try {
        const result = await fetch(url, options);

        if (result.status >= 200 && result.status < 400) {
            const data = await result.json();
            const users = data.results;

            console.log(users);
            printUsers(users);
        }
    } catch(error) {
        console.log(error);
    }
}

function printUsers(users) {
    users.forEach(function (inputInfo) {
        let userElement = inputInfo;

        let userImage = document.createElement('img');
        userImage.classList.add('user-image');
        randomuser.appendChild(userImage);
        document.querySelector('.user-image').src = userElement.picture;

        let name = document.createElement('h3');
        name.classList.add('content');
        randomuser.appendChild(name);
        name.innerText = userElement.name.first;

        let content = document.createElement('p');
        randomuser.appendChild(content);
    })
}

getUser();