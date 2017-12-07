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
var items = document.getElementsByTagName('li');
console.log(items);
console.log(items[0]);
items[1].textContent = 'TestItem';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

for (var index = 0; index < items.length; index++) {
    const element = items[index];
    element.style.backgroundColor = 'orange';
}