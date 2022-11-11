var fruits = ['apple', 'banana', 'peach']; 
var Sul = document.createElement('ul');

var alertFruit = function (fruit) {
    alert('your choice is ' + fruit);
};
fruits.forEach(function (fruit) {
    var $1i = document.createElement('1i'); 
    $1i.innerText = fruit; 
    $1i.addEventlistener('click', alertFruit); 
    $ul.appendChild($1i);
});
document.body.appendChild($u1); 
alertFruit(fruits[1]);
    