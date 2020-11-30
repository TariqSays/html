var list = document.getElementById("list")


function onTodo(){
    var todo_item = document.getElementById("todo-item");
    
    // create li tag with text node
    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText);

    // del button
    var delBtn = document.createElement('button');
    var delTxt = document.createTextNode("Delete");
    // edit button
    var editBtn = document.createElement('button');
    var editTxt = document.createTextNode('Edit');



    delBtn.appendChild(delTxt);
    delBtn.setAttribute("onclick","deleteItem(this)");
    li.appendChild(delBtn);

    editBtn.appendChild(editTxt);
    editBtn.setAttribute("onclick","editItem(this)");
    li.appendChild(editBtn);

    list.appendChild(li);
    todo_item.value = "";
    console.log(li);
}

function deleteItem(e){
    console.log(e);
    e.parentNode.remove();
}

function deleteAll(){
    list.innerHTML = "";
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var newval = prompt("Enter New Value",val);
    e.parentNode.firstChild.nodeValue = newval;
}