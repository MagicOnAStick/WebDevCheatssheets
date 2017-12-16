var addForm = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//Form submit event
addForm.addEventListener("submit",addItem);

//delete item event
itemList.addEventListener("click",removeItem);

//filter filter event
filter.addEventListener("keyup",filterItems);

function filterItems(i){
    //convert to lowercase
    var text = i.target.value.toLowerCase();
    
    //get lis from itemlist
    var items = itemList.getElementsByTagName("li");
    
    //convert html collection to array to filter
    Array.from(items).forEach(function(item){
        //get itemnames
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "block";            
        }
        else{
            item.style.display = "none";
        }
    });
}

function removeItem(f){

    //only fire on button inside li click
    if(f.target.classList.contains("delete")){
        if (confirm("Are you sure to delete the Item?")) {
            //parent element for buttons li Element
            var li = f.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function addItem(e){
    e.preventDefault();
    //get input value
    var newItem = document.getElementById("item").value;

    //create new li element
    var li = document.createElement("li");
    //add class
    li.className = "list-group-item";
    //add textNode with input value
    li.appendChild(document.createTextNode(newItem));

    //create del button element
    var delButton = document.createElement("button");
    
    //add classes to deletebutton
    delButton.className = "btn btn-danger btn-sm float-right delete";

    //Append text node
    delButton.appendChild(document.createTextNode("X"));

    //Append Button to LI
    li.appendChild(delButton);

    //Append LI to List
    itemList.appendChild(li);
}