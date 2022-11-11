var Constructor = function (name) {
    this.name = name;
};
Constructor.prototype.methodl = function() {}; 
Constructor.prototype.propertyl = 'Constructor Prototype Property';

var instance = new Constructor(' Instance'); 
console. dir(Constructor);
console.dir(instance);
