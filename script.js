const todos = document.querySelectorAll(".todo");
const all_status = document.querySelectorAll(".status");
let draggableTodo = null;
var fun = "";
todos.forEach((todo) => {
  todo.addEventListener("dragstart", dragStart);
  todo.addEventListener("dragend", dragEnd);
});

function dragStart() {
  draggableTodo = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
  console.log("dragStart");
}

function dragEnd() {
  draggableTodo = null;
  setTimeout(() => {
    this.style.display = "block";
  }, 0);
  console.log("dragEnd");
}

all_status.forEach((status) => {
  status.addEventListener("dragover", dragOver);
  status.addEventListener("dragenter", dragEnter);
  status.addEventListener("dragleave", dragLeave);
  status.addEventListener("drop", dragDrop);
});

function dragOver(e) {
  e.preventDefault();
 
}

function dragEnter() {
  this.style.border = "1px dashed #ccc";
  console.log("dragEnter");
}

function dragLeave() {
  this.style.border = "none";
  console.log("dragLeave");
}

function dragDrop() {
  this.style.border = "none";
  this.appendChild(draggableTodo);
  console.log("dropped");
}


const btns = document.querySelectorAll("[data-target-modal]");
const close_modals = document.querySelectorAll(".close-modal");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.targetModal).classList.add("active");
    overlay.classList.add("active");
  });
});

close_modals.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    modal.classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (event) => {
  if (event.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};


const todo_submit = document.getElementById("todo_submit");
const todo_cancel = document.getElementById("todo_cancel");

todo_submit.addEventListener("click", createTodo);
todo_cancel.addEventListener("click", cancelTodo);

function cancelTodo() {
  const todo_div = document.createElement("div");
  const input_val = document.getElementById("todo_input").value;
  const txt = document.createTextNode(input_val);
  
  todo_div.appendChild(txt);
  todo_div.classList.add("todo");
  todo_div.setAttribute("draggable", "true");
  
  
  const span = document.createElement("span");
  const span_txt = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(span_txt);
  span.setAttribute("onclick","getConfirmation()");
  todo_div.appendChild(span);
  const data = document.querySelector(".close");
  data.setAttribute("onclick","getConfirmation()");
  // no_status.appendChild(todo_div);

 


  todo_div.addEventListener("dragstart", dragStart);
  todo_div.addEventListener("dragend", dragEnd);

  document.getElementById("todo_input").value = "";
  document.getElementById("todo_textarea").value = "";
  todo_form.classList.remove("active");
  overlay.classList.remove("active");
}
     

 


function createTodo() {
  const todo_div = document.createElement("div");
  const todo_div1 = document.createElement("div");
   const input_val = document.getElementById("todo_input").value.trim();
  const textarea_val = document.getElementById("todo_textarea").value.trim();
  const select_val = document.getElementById("todo_select").value.trim();
  if (!input_val || !textarea_val || !select_val) {
    return;
  }
  const txt = document.createTextNode(input_val);
  const txt1 = document.createTextNode(textarea_val);

  todo_div.appendChild(txt);
  todo_div1.appendChild(txt1);
  
  todo_div.classList.add("todo");
  todo_div.setAttribute("draggable", "true");
  todo_div1.classList.add("todo");
  todo_div1.setAttribute("draggable", "true");

  
  const span = document.createElement("span");
  const span_txt = document.createTextNode("\u00D7");
  span.classList.add("close");
  span.appendChild(span_txt);
  const span1 = document.createElement("span");
  const span_txt1 = document.createTextNode("\u00D7");
  span1.classList.add("close");
  span1.appendChild(span_txt1);

  const span2=document.createElement("button");
  const span2_txt=document.createTextNode("edit");
  span2.classList.add("edit");
  span2.appendChild(span2_txt);






  todo_div.appendChild(span);
  todo_div.appendChild(span2);
  
  todo_div.appendChild(todo_div1);
  if(fun == "imp"){
    inp.appendChild(todo_div);
  }else if(fun == "do"){
    done.appendChild(todo_div);
  }
  

  span.addEventListener("click", () => {
    span.parentElement.style.display = "none";
  });
   span1.addEventListener("click", () => {
    span1.parentElement.style.display = "none";
  });
  

  todo_div.addEventListener("dragstart", dragStart);
  todo_div.addEventListener("dragend", dragEnd);

  document.getElementById("todo_input").value = "";
  document.getElementById("todo_textarea").value = "";
  todo_form.classList.remove("active");
  overlay.classList.remove("active");


  span.addEventListener("click", () => {
  console.log("hello");
    getConfirmation();
    
  });
}
function getConfirmation() {
  console.log("hello");
               var retVal = confirm("Do you want to continue ?");
               if( retVal == true ) {
                  todo_div.style.display = "none";
               } 
            }

const close_btns = document.querySelectorAll(".close");

close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.style.display = "none";
  });
});

function change(val){
  fun=val;
  console.log(val,fun,"hello")
}