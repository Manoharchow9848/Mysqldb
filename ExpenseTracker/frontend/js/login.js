const form = document.getElementById("loginForm");
const api = "http://localhost:3000/api/users/login";
form.addEventListener("submit",async(e)=>{
    e.preventDefault()
     const email = e.target.email.value;
    const password = e.target.password.value;
    if( !password || !email){
        showToast("All fields are required", "error");
    return;
    }
    try {
       const res = await axios.post(api,{email,password});
       console.log(res.data);
       localStorage.setItem("user",JSON.stringify(res.data));
       localStorage.setItem("isLoggedIn","true");
       showToast("User Successfully logged in")

       setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
    } catch (error) {
        const message = error.response?.data?.message || "Something went wrong";
        showToast(message, "error");

        
    }
})

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = `toast ${type} show`;

  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}