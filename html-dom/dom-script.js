function addParagraph(){
const para =document.createElement("p");
para.innerText="this is in paragraph";
para.style.color="red";
const parent= document.getElementById("bg");
parent.appendChild(para);
}

function remParagraph(){
const parent= document.getElementById("bg");
const child = document.querySelector("p");
parent.removeChild(child);
}

function removeALL(){
    const parent= document.getElementById("bg");
    const child = document.querySelector("p");
    const children = parent.querySelectorAll("p");
    for(let child of children){
        parent.removeChild(child);
    }
}