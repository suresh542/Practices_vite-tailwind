

const fullName = document.getElementById("fullName")
const email = document.getElementById("email")
const age = document.getElementById("Age")
const number = document.getElementById("number")
const address = document.getElementById("address")
const submitBtn = document.getElementById("valideForm")
const tableBody = document.getElementById("tableBody")


const localData = ()=>{
    tableBody.innerHTML= "";
    const data = JSON.parse(localStorage.getItem("users")) || [];
    data.forEach((user,index)=>ValideData(user,index))
}

const ValideData=(user,index)=>{
    const newRow = document.createElement("tr")
    newRow.innerHTML= `
    <td>${user.fname}</td>
    <td>${user.email}</td>
    <td>${user.age}</td>
    <td>${user.number}</td>
    <td>${user.address}</td>
    <td><button onclick={${EditBtn(index)}} >Edit</button></td>
    <td><button onclick={${DeleteBtn(index)}} >Delete</button></td>
    `;

    tableBody.appendChild(newRow);
}

    submitBtn.addEventListener("submit",(e)=>{
        e.preventDefault();
        let users = JSON.parse(localStorage.getItem("users")) || []
        let user = {
            fname : fullName.value,
            email : email.value,
            age : age.value,
            number : number.value,
            address : address.value,
        }
        users.push(user)
        localStorage.setItem("users",JSON.stringify(users));
        submitBtn.reset();
        localData();
    })


    const DeleteBtn = (index)=>{
        let users = JSON.parse(localStorage.getItem("users")) || []
        users.splice(index,1);
        localStorage.setItem("users", JSON.stringify(users))
        localData()
    }


    const EditBtn = (index)=>{
        console.log(index)
    }

    localData();