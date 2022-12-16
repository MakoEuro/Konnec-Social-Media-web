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

const randomUser = select('.random-user');

const randomInfo = select('.random-info');

// Functions --------------------------
const url = 'https://randomuser.me/api/?nat=CA&results=10';

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    },
    mode: 'cors'
}

async function getUsers() {
    try {
        const result = await fetch(url, options);

        if (result.status >= 200 && result.status < 400) {
            const data = await result.json();
            const users = data.results;
            printUsers(users);
        }
    } catch(error) {
        console.log(error);
    }
}

function printUsers(users) {
    users.forEach(function (inputInfo) {
        let userElement = inputInfo;

        let individualUser = document.createElement('div');
        individualUser.classList.add('individual');
        
        randomUser.prepend(individualUser);

        let userImage = document.createElement('img');
        userImage.classList.add('user-image');
        individualUser.appendChild(userImage);
        document.querySelector('.user-image').src = userElement.picture.medium;

        let info = document.createElement('div');
        info.classList.add('side-info');
        individualUser.appendChild(info);
        
        let name = document.createElement('h3');
        name.classList.add('name-of-user');
        info.appendChild(name);
        name.innerText = userElement.name.first + ' ' + userElement.name.last;

        let content = document.createElement('p');
        info.appendChild(content);
        content.innerText = userElement.location.state + ', ' + userElement.location.country;
    })
}
getUsers();