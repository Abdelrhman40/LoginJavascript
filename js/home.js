let user = localStorage.getItem("username")

let log = document.getElementById("logOut")

if (user) {
    document.getElementById("welcome").innerHTML = "welcome " + user
}

log.addEventListener('click', function() {
    localStorage.removeItem('username')
})