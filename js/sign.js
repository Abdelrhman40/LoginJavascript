let emailname = document.getElementById("name")
let email = document.getElementById("email")
let password = document.getElementById("pass")
let sign = document.getElementById("signup")

let emails;

if (localStorage.getItem("all emails ") == null) {
    emails = [];
} else {
    emails = JSON.parse(localStorage.getItem("all emails"));
}



function isEmpty() {

    if (emailname.value == "" || email.value == "" || password.value == "") {
        return false
    } else {
        return true
    }
}

function isEmailExist() {
    for (var i = 0; i < emails.length; i++) {
        if (emails[i].Email.toLowerCase() == email.value.toLowerCase()) {
            return false
        }
    }
}


sign.addEventListener('click', function() {



    if (isEmpty() == false) {
        document.getElementById("isemp").innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }

    let mails = {
        name: emailname.value,
        Email: email.value,
        password: password.value
    }



    if (isEmailExist() == false) {
        document.getElementById("isemp").innerHTML = '<span class="text-danger m-3">email already exists</span>'

    } else {
        emails.push(mails);
        localStorage.setItem("all emails", JSON.stringify(emails))
        document.getElementById("isemp").innerHTML = '<span class="text-success m-3">Success</span>'
        clearAll();

    }




})

function clearAll() {
    emailname.value = "";
    email.value = "";
    password.value = "";
}