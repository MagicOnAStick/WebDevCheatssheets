//EXAMINE THE DOCUMENT OBJECT
//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//document.title = 123;
//console.log(document.title);
//console.log(document.head);
//console.log(document.all);
//document.all[10].textContent = 'Hello';
//console.log(document.forms);
//console.log(document.forms[0]);
//console.log(document.links); // returns no array - returns html collection

// SELECTORS

//GETELEMENTBYID
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');

//MANIPULATE TEXTCONTENT
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye'
//headerTitle.innerHTML = '<h3>Hihihi</h3>'
header.style.borderBottom = 'solid 3px #000';

//GET ELEMENTS BY CLASSNAME
//var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[0]);
//items[1].textContent = 'TestItem';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';

//for (var index = 0; index < items.length; index++) {
//    const element = items[index];
//    element.style.backgroundColor = 'yellow';
//}

//GET ELEMENTS BY TAG NAME
//var items = document.getElementsByTagName('li');
//console.log(items);
//console.log(items[0]);
//items[1].textContent = 'TestItem';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';
//
//for (var index = 0; index < items.length; index++) {
//    const element = items[index];
//    element.style.backgroundColor = 'orange';
//}

//QUERYSELECTOR
//analog to jquerys '$' selector

//id must be prequesite with #
/* var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

//first one by default
var input = document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

//CSS INTO HERE
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'orange';
 */
//QUERY SELECTORALL (class = .)
/* var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = '#ccc';
}
 */

 //TRAVERSING THE DOM
 var itemList = document.querySelector('#items');
 //parentNode
 /* console.log(itemList.parentNode);
 itemList.parentNode.style.backgroundColor = '#f4f4f4';
 console.log(itemList.parentNode.parentNode);
  */

//child nodes
//console.log(itemList.childNodes);

// Create a div
var newDiv = document.createElement('div');
newDiv.className = 'hello'; 
newDiv.id = 'hello1';

//Add attr
newDiv.setAttribute('title', 'helloDiv');

//create text node
var newDivText = document.createTextNode('Hello World');
//add text to div
newDiv.appendChild(newDivText);

//insert into DOM
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

//insert the newDiv into container before h1
container.insertBefore(newDiv,h1);
newDiv.style.fontSize = '30px';

console.log(newDiv);

//EVENT HANDLING

//var button = document.getElementById("button");
//button.addEventListener("click",runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

//var box = document.getElementById("box");
//var body = document.body;
//box.addEventListener("mousemove",runEvent);
/* var itemInput = document.querySelector('input[type="password"]');
itemInput.addEventListener("input",runEvent);
 */
/* var select = document.querySelector("select");
select.addEventListener('change',runEvent);
 */
//var form = document.querySelector('form');
//form.addEventListener('submit',runEvent);

function runEvent(e){
    //prevent submit action
    //e.preventDefault();
    //returns the event value
    //console.log('EVENT TYPE: '+e.target.value);
    //var output = document.querySelector('.output');
    //output.innerHTML = '<h3>'+e.target.value+'</h3>';
    //output.innerHTML = '<h3>'+e.offsetX+'</h3><h3>'+e.offsetY+'</h3>'
}


//parameter e comes with each event listener
function buttonClick(e){
    /* console.log(e.target.className);
    console.log(e.target.classList);
    document.querySelector('#header-title').textContent = "Button clicked";
    document.querySelector('#main').style.backgroundColor = '#ccc';
    
    var output = document.querySelector('.output');
    output.innerHTML = '<h3>'+e.target.id+'</h3>';
 */
    //console.log(e.type);
    // coordinates from screen
    //console.log(e.clientX);
    // coordinates from element itself
    //console.log(e.offsetX);1
}