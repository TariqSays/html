var ul = document.getElementById("list");

function add(){
  var item = document.getElementById("item");

  var li = document.createElement("li");
  var textNode = document.createTextNode(item.value);
  li.appendChild(textNode);

var edit = document.createElement("button");
var editText = document.createTextNode("EDIT");
edit.appendChild(editText);
edit.setAttribute("onclick","editBtn(this)");


var del = document.createElement("button");
var delText = document.createTextNode("DEL");
del.appendChild(delText);
del.setAttribute("onclick","delbtn(this)");

li.appendChild(edit);
li.appendChild(del);

  ul.appendChild(li);
  item.value = "";
}



function editBtn(e){
    var oldvalue = e.parentNode.firstChild.nodeValue;
    var newvalue = prompt("Enter New Value",oldvalue);
    console.log(newvalue);
    e.parentNode.firstChild.nodeValue = newvalue;
}
function delbtn(e){
    e.parentNode.remove();
}


function delall(){
  ul.innerHTML = "";
}