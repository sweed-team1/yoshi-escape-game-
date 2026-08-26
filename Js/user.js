let Username;
let getName = localStorage.getItem("userName");

function store() {
    if (getName) {
        let ar = JSON.parse(getName);
        console.log(ar);
    }
}

document.getElementById("start-btn").addEventListener("click", function () {

    console.log("Game started!");

    const user = document.getElementById("user");
    let myName = user.value.trim();

    Username = [{
        name: myName
    }];

    let user_regex = /^[a-zA-Z]{6,}$/;

    if (myName === "") {
        alert("Username required");
        return;
    }

    if (!user_regex.test(myName)) {
        alert("Username must be at least 6 letters");
        return;
    }

    localStorage.setItem(
        "userName",
        JSON.stringify(Username)
    );

    user.value = "";

    let modal = document.getElementById("myModal");

    modal.style.display = "block";

    let span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    setTimeout(() => {
        window.location.href = "./game.html";
    }, 1000);
});
