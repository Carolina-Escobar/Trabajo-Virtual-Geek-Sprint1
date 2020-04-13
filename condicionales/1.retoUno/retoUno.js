'use strcit';
const username = document.getElementById('username')
const imgAvatar = 'http://placehold.it/300x300';
let imgUser = "";

if (imgUser === "" || imgUser === undefined) {
    const emptyBox = document.querySelector('#box');
    const newImg = document.createElement('img');
    newImg.src = imgAvatar;
    emptyBox.appendChild(newImg);
} else {
    const emptyBox = document.querySelector('#box');
    const newImg = document.createElement('img');
    newImg.src = imgUser;
    emptyBox.appendChild(newImg);
}

