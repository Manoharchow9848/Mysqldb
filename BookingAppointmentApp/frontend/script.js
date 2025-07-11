const form = document.getElementById("appointmentForm");
const btn = document.getElementById("btn");
const ul = document.getElementById("list")
const api = "http://localhost:3000/api"
let currentEditId = null;
init()
function init(){
    display();
    
}

form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phoneNumber = e.target.phonenumber.value;
   console.log(name,email,phoneNumber)
    if(!name || !email || !phoneNumber){
        alert('All fileds are required')
    }
    const user = {
        name,
        email,
        phoneNumber
    }
    try {
        if (currentEditId) {
      await axios.put(`${api}/update/${currentEditId}`, user);
    }else{
        await axios.post(`${api}/add-user`,user);
        alert('user added')
    }
    resetForm();
    display();
    } catch (error) {
        console.log(error);
        alert(error)
        
    }

})

async function display(){

    try {
        ul.innerHTML="";
        const list = await axios.get(`${api}/users`);
        const usersList = list.data;
         if (Array.isArray(usersList) && usersList.length > 0) {
        usersList?.forEach((user)=>{
           const li = document.createElement("li");
            li.textContent=`${user.name} - ${user.email} ${user.phoneNumber}`
            const deletebtn = document.createElement("button");
            deletebtn.textContent="delete";
             deletebtn.style.backgroundColor = "red";
              deletebtn.onclick = ()=>deleteUser(user.id,deletebtn);
              li.appendChild(deletebtn);
              const editBtn = document.createElement("button");
              editBtn.textContent = "Edit";
               editBtn.style.marginLeft = "8px";
               editBtn.onclick=()=>editUser(user);
               li.appendChild(editBtn);
               ul.appendChild(li);

        })
    }
        

        
    } catch (error) {
        alert(error)
    }
}

 function deleteUser(id,deletebtn){
    try {
        deletebtn.innerHTML="deleting"
      axios.delete(`${api}/delete/${id}`);
      

       
        if (currentEditId === id) {
      resetForm();
    }

     display()
       
    } catch (error) {
        alert(error)
    }
}
async function editUser(user) {
     form.name.value=user.name;
     form.email.value=user.email;
     form.phonenumber.value=user.phoneNumber;
     currentEditId = user.id
      btn.textContent = "Update";
}

function resetForm() {
  form.reset();
  currentEditId = null;
  btn.textContent = "Submit";
}