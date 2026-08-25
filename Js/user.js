let Username;

const user = document.getElementById("user");

function start() {

  let myName = user.value.trim();

  const user_regex = /^[a-zA-Z]{6,}$/;

  if (myName === "") {
    alert("Username required");
    return;
  }

  if (!user_regex.test(myName)) {
    alert("Username should contain at least 6 letters");
    return;
  }

  Username = [
    {
      name: myName
    }
  ];

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
}
