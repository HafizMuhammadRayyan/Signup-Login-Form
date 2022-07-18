// let page = location.href.split("/");
// page = page[page.length - 1];

let users = []

function signup() {     // Sign Up Funtions

    let fullName = document.getElementById("fullName").value;
    let city = document.getElementById("city").value
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    // console.log(fullName);

    if (password === confirmPassword) {
        
        let newUser = {
            user_fullName: fullName,
            user_city: city, 
            user_email: email,
            user_password: password,
            user_confirmPassword: confirmPassword
        }
        console.log(newUser);

        for (let i = 0; i < users.length; i++) {
            if (users[i].user_email === email) {
                alert("Email already exists")
                return;
            }
        }

        users.push(newUser)

        localStorage.setItem("users", JSON.stringify(users))
        window.location.href = "./login.html";

    }
    else{
        alert("Passwords do not match");
        return;
    }
    
}