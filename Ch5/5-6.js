var fruits = ['apple', 'banana', 'peach']; 
var Sul = document.createElement('ul');

fruits.forEach(function (fruit) {
    var $li = document.createElement('li'); 
    $li.innerText = fruit; 
    $li.addEventlistener('click', function () {   
        alert('your choice is ' + fruit);
    });
    $ul.appendChild($li);
});
document.body.appendChild(Sul);
