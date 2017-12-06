//Variables
//1. Number
var number1 = 35;

//2. String
var test = 'test'

//3. array
var colors = ['red','blue','green'];

colors.push('purple')

//Loops
//1. for loop
for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//2. other types of loops e.g. while etc.

//conditionals
//1. (if) == compares data but with non matching data types
if (1=='1') {
  console.log('equals');
}

//=== comapres data and data types needs to match
if (1==='1') {
  console.log('equals');
}
else{
  console.log('not equal');
}

//2. switch statement (break after each condition to stop)!
/*switch (test) {
  case 'live':
        alert('live condition');
        break;
  case 'test':
        alert('test condition');
        break;
  default:
        alert('dev condition');
        break;

}*/

//Objects
//1. Object literal (JSON JavaScript Object Notation)
var person ={
  firstname : 'Brad',
  lastname : 'Michaels',
  age : 28,
  children: ['Brianna', 'Hannelore'],
  adress: {
    street: 'Street',
    city: 'Boston',
    state: 'MA'
  },

  fullname: function(){
    return this.firstname+" "+this.lastname;
  }

}

for (var i = 0; i < person.children.length; i++) {
  console.log(person.children[i]);
}
console.log(person.adress.city);

console.log(person.fullname());

//Object Constructor Example
var apple = new Object();
apple.color = 'red';
apple.shape = 'round';
apple.describe = function(){
  return "This Apple is "+this.color + " and is "+this.shape;
}
console.log(apple.describe());

//Object Constructor pattern
function Fruit(color, shape, name){
  this.color = color;
  this.shape = shape;
  this.name = name;
}

var banana = new Fruit('yellow','round','banana');
var melon = new Fruit('green', 'round', 'melon');
console.log(melon);
console.log(banana);

//EVENTS
function doClick(){
  alert('You clicked!');
}

function changeText(id){
  var htmlElement = document.getElementById(id);
  htmlElement.innerHTML = 'You Clicked!';
}

function showDate(id){
  var htmlElement = document.getElementById(id);
  htmlElement.innerHTML = Date();
}

function clearDate(id){
  var htmlElement = document.getElementById(id);
  htmlElement.innerHTML = 'Cleared Date';
}

//FORMS
function changeBackground(x){
  //console.log(x);
  console.log(x.value);
  var body = document.getElementById('body');
  body.style.backgroundColor = x.value;
  var heading = document.getElementById('heading');
  heading.style.color = x.value;
}

function validateForm(){
  var firstName = document.forms["myForm"]["firstName"].value;
  console.log(firstName);
  if(firstName == null || firstName == ""){
    alert("First name is required");
    return false;
  }
  else if (firstName.length < 3) {
    alert("First name must at least be three chars");
    return false;
  }
}
