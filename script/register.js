const $registerForm = document.querySelector("#registerForm")
const $inputs = $registerForm.querySelectorAll("input")



const handleRegisterUser = (e) => {
    e.preventDefault();
    
    const values = Array.from($inputs).map(input => input.value)
    const user = {
    name: values[0],
    password: values[1],
    email: values[2],
    avatar: values[3],
    }
    console.log(user)
    fetch('https://api.escuelajs.co/api/v1/users',{
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body:JSON.stringify(user)
    })
        .then(responce => responce.json())
        .then(data => {
            location.replace(location.origin + "/pages/login.html")
            console.log(data)
        })
}

$registerForm.addEventListener("submit", handleRegisterUser)