let input=document.getElementById("todo-input");
let addButton=document.getElementById("add-todo-btn");
let todoTr=document.getElementById("todo-tr");
addButton.addEventListener('click',addTodos);
function addTodos(){
    let todoText=input.value;
    if(todoText==="")return;
    let tr=document.createElement("tr");
    let td=document.createElement("td");
    let button=document.createElement("button");
    td.textContent=todoText;
    tr.appendChild(td);
    tr.appendChild(button);
    button.textContent="Delete";
    button.addEventListener('click',function(){
        todoTr.removeChild(tr);
    });
    todoTr.appendChild(tr);
    input.value="";
}