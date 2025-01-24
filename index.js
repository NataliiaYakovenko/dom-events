"use strict";
const btn = document.querySelector('#btn');

function greetingUser(event){
 alert('Hello, clicker!')
}
btn.addEventListener('click', greetingUser)