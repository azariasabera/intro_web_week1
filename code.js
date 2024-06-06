const myButton = document.getElementById('my-button');
myButton.addEventListener('click', function() {
    console.log('hello world');
    let text = "Moi maailma";
    document.getElementById('my-text').innerText = text;
});

const addButton = document.getElementById('add-data');

addButton.addEventListener('click', function() {
let newLi = document.createElement('li');
newLi.innerText = 'This is a new text!';
document.getElementById('my-list').appendChild(newLi);
document.getElementById('my-textarea').innerText = newLi.innerText;

/*
Shortly line 11 - 13 can be written as:
document.getElementById('my-list').innerHTML += '<li>This is a new text!</li>';
*/
});