var fruits = ['apple', 'banana', 'peach']; 
var Sul = document.createElement('ul');

var alertFruit = function (fruit) {
    alert('your choice is ' + fruit);
};
fruits.forEach(function (friut) {
    var $1i = document.createElement('1i');
    $li.innerText = fruit;
    $1i.addEventListener('click', alertFruit.bind(null, fruit));
    $u1.appendCild($li);
});
document.body.appendChild($u1); 
alertFruit(fruits[1]);