import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove, set } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-database.js";


const firebaseDB = {
    dbUrl :  "https://sample-project-ef56a-default-rtdb.firebaseio.com/"
}

const app = initializeApp(firebaseDB)





const fName = document.getElementById("fullName")
const age = document.getElementById("Age")
const email = document.getElementById("email")
const phoneNumber = document.getElementById("phone")
const submitBtn = document.getElementById("userForm")
const tBody = document.getElementById("tableBody")


submitBtn.addEventListener("submit", (e)=>{
    e.preventDefault();

    if(!fName.value || !age.value || !email.value || !phoneNumber.value){
        alert("Enter the all filed")
        return
    }

    const createRow = document.createElement("tr")
    createRow.innerHTML = `
    <td>${fName.value}</td>
    <td>${age.value}</td>
    <td>${email.value}</td>
    <td>${phoneNumber.value}</td>
    <td><button id="EditBtn">Edit</button></td>
    <td><button id="deleteBtn">Delete</button></td>
    `;
    tBody.appendChild(createRow);
    const values = {
        fullname : fName.value,
        age : age.value,
        email : email.value,
        phoneNumber : phoneNumber.value,
    }
    console.log(values)


    fName.value = "";
    age.value = "";
    email.value="";
    phoneNumber.value = "";

    createRow.querySelector("#EditBtn").addEventListener("click",()=>{
        fName = values.fullname
    })


    createRow.querySelector("#deleteBtn").addEventListener("click", function () {
        createRow.remove();
    });
    
})