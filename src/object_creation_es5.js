
function Person(name, age) {

    // To make member fields 'protected' they are declared as local variables within the scope of the constructor function
    // (if they initialization was done by this.<member> = value; then they would be public)
    var _name = name;
    var _age = age;

    this.getName = function () {
        return _name;
    }

    this.getAge = function () {
        return _age;
    }
}

var p1 = new Person("John", 25);
var p2 = new Person("Jane", 23);

console.log(p1.getName() + " is " + p1.getAge() + " years old.");
console.log(p2.getName() + " is " + p2.getAge() + " years old.");