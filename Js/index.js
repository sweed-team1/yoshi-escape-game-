let play = document.getElementById("play");
let about = document.getElementById("about");
let store = document.getElementById("store");
let otherGames = document.getElementById("other");

play.addEventListener("click", function () {
    window.location.href = "user.html";
});

about.addEventListener("click", function () {
    window.location.href = "about.html";
});

store.addEventListener("click", function () {
    window.open(
        "https://www.microsoft.com/en-in/store/top-free/apps/pc",
        "_blank"
    );
});

otherGames.addEventListener("click", function () {
    window.open(
        "https://www.microsoft.com/en-in/store/games",
        "_blank"
    );
});
