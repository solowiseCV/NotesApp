

const notesContainer = document.querySelector(".notesContainer");
const createBtn = document.querySelector(".btn");
let notes =document.querySelectorAll(".input-box");
 
const showNotes =()=>{
    notesContainer.innerHTML = localStorage.getItem("notes");
}

 const updateStorage =()=>{
    localStorage.setItem("notes",notesContainer.innerHTML);
 }
createBtn.addEventListener("click",()=>{
  let inputBox = document.createElement("p");
  let img = document.createElement("img")
  inputBox.className= "input-box";
  img.src = "images/delete.png"
  inputBox.setAttribute("contenteditable","true");
  notesContainer.appendChild(inputBox).appendChild(img); 
});

notesContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName ==="p"){
            notes = document.querySelectorAll(".input-box");
            notes.forEach(nt=>{
                nt.onkeyup= function(){
                    updateStorage();
                }
            })
        }
    })

    document.addEventListener("keydown", e =>{
        if(e.key === "Enter"){
         document.execCommand("insertLineBreak");
         e.preventDefault();
        }
     })