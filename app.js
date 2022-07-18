
function signup() {
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (password != confirmPassword) {
        alert("Passwords do not match");
        return;
    }
}