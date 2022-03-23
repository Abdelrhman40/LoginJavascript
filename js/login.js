let emailName = document.getElementById("email")
let pass = document.getElementById("password")
let array = JSON.parse(localStorage.getItem("all emails"))
let mainbtn = document.getElementById("gohome")


function Empty() {
    if (emailName.value == "" || pass.value == "") {
        return false
    } else {
        return true
    }
}

function Exist() {
    for (var i = 0; i < array.length; i++) {
        if (array[i].Email.toLowerCase() == emailName.value.toLowerCase() && array[i].password == pass.value) {
            localStorage.setItem("username", array[i].name)
            return true
        }
    }
}

mainbtn.addEventListener('click', function() {
    if (Empty() == false) {
        document.getElementById("info").innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }

    if (Exist() == true) {
        window.location.replace("home.html")

    } else {
        document.getElementById("info").innerHTML = '<span class="text-danger m-3">e-mail is not exist</span>'
    }
})