let task = document.getElementById("to-do");
let lisToDo = document.getElementById('list-to-do');
let TaskTodo = document.getElementById('task-to-do');
let divList = document.getElementById("item");
let p = document.querySelector('p');
p.innerHTML = localStorage.getItem("task");

function add(){
   
    //lisToDo.style.display = "none";
    let index  = Math.floor(Math.random()*1000);

    //let divElement = document.createElement("div");
    
    if(task.value == ""){
        alert("Please, Introduce a valid task")
    } else{

        /*divElement.setAttribute("id", "item");
        divElement.setAttribute("style", "background-color: rgb(196,224,228);height: 30px; width: 70%; margin-left: 40px; font-family: Arial, Helvetica, sans-serif; padding-left: 5px; padding-top: 10px; margin-bottom: 10px");

        TaskTodo.appendChild(divElement);*/
        localStorage.setItem("task" ,task.value);
        p.innerHTML = localStorage.getItem("task");

        task.value = "";
    }
    
    //lisToDo.style.display = "block";
        
}

    function remove(){
        localStorage.removeItem('task');
        divList.innerHTML = "";
    }

    function edit(){
        task.value = localStorage.getItem('task');
    }
