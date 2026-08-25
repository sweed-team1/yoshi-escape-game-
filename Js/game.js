let timer;
let score;
let paused = false;

let Live = 3;
let sco = 0;

let x = 50;
let y = 290;
let w = 100;
let h = 100;

const mp3 = new Audio("./AUD-20221005-WA0007.mp3");
const mp4 = new Audio("./explosion.mp3");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const Username =
  JSON.parse(localStorage.getItem("userName")) || [];

const playerName =
  Username.length > 0
    ? Username[0].name
    : "Guest";

document.getElementById("write2").innerHTML =
  `PLAYER: <span style="font-size:20px">${playerName}</span>`;

const img = new Image();
img.src = "./image/improvedanime.png";

function drawPlayer() {
  ctx.drawImage(img, x, y, w, h);
}

class Enemy {
  constructor(ex, ey, width, height, source, speed) {
    this.ex = ex;
    this.ey = ey;
    this.width = width;
    this.height = height;
    this.speed = speed;

    this.sprite = new Image();
    this.sprite.src = source;
  }

  move() {
    this.ex -= this.speed;

    if (this.ex <= -this.width) {
      this.ex = canvas.width;
    }
  }

  draw() {
    if (this.sprite.complete) {
      ctx.drawImage(
        this.sprite,
        this.ex,
        this.ey,
        this.width,
        this.height
      );
    }
  }
}

const enemies = [
  new Enemy(
    1300,
    10,
    120,
    100,
    "./image/anim-project-removebg-preview-removebg-preview.png",
    20
  ),

  new Enemy(
    1300,
    150,
    120,
    100,
    "./image/anim-project-removebg-preview-removebg-preview.png",
    10
  ),

  new Enemy(
    1300,
    300,
    120,
    100,
    "./image/anim-project-removebg-preview-removebg-preview.png",
    15
  ),

  new Enemy(
    1300,
    420,
    120,
    100,
    "./image/anim-project-removebg-preview-removebg-preview.png",
    20
  ),

  new Enemy(
    1300,
    550,
    120,
    100,
    "./image/anim-project-removebg-preview-removebg-preview.png",
    25
  )
];

function collision() {
  for (const enemy of enemies) {
    if (
      x < enemy.ex + enemy.width &&
      x + w > enemy.ex &&
      y < enemy.ey + enemy.height &&
      y + h > enemy.ey
    ) {
      Live--;

      enemy.ex = canvas.width;

      break;
    }
  }

  ctx.font = "30px Arial";
  ctx.fillStyle = "red";

  ctx.fillText("Lives: " + Live, 1150, 30);
  ctx.fillText("Score: " + sco, 600, 30);

  if (Live <= 0) {
    gameOver();
  }
}

function gameOver() {
  clearInterval(timer);
  clearInterval(score);

  mp3.pause();
  mp4.play();

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.font = "40px Arial";
  ctx.fillStyle = "red";

  ctx.fillText("GAME OVER", 550, 300);
  ctx.fillText("Score: " + sco, 560, 350);
  ctx.fillText("Press F5 To Restart", 470, 410);
}

function updateLevels() {
  if (sco === 20) {
    write.innerHTML = "LEVEL TWO";

    canvas.style.backgroundImage =
      "url('./bgimg/50 Animated Gifs of Fighting Game Backgrounds TwistedSifter.gif')";
  }

  if (sco === 40) {
    write.innerHTML = "LEVEL THREE";

    canvas.style.backgroundImage =
      "url('./bgimg/50 Animated Gifs of Fighting Game Backgrounds TwistedSifter (1).gif')";
  }

  if (sco === 60) {
    write.innerHTML = "LAST LEVEL";

    canvas.style.backgroundImage =
      "url('./bgimg/are examples of pixel art from the Last Blade series of video games.gif')";
  }
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  enemies.forEach((enemy) => {
    enemy.move();
    enemy.draw();
  });

  drawPlayer();

  collision();
}

function startGame() {
  timer = setInterval(gameLoop, 100);

  score = setInterval(() => {
    sco++;
    updateLevels();
  }, 1000);
}

window.addEventListener("keydown", (e) => {
  if (Live <= 0) return;

  if (mp3.paused) {
    mp3.play();
  }

  switch (e.key) {
    case "ArrowRight":
      x = Math.min(x + 10, canvas.width - w);
      break;

    case "ArrowLeft":
      x = Math.max(x - 10, 0);
      break;

    case "ArrowUp":
      y = Math.max(y - 10, 0);
      break;

    case "ArrowDown":
      y = Math.min(y + 10, canvas.height - h);
      break;
  }
});

window.addEventListener("keydown", (e) => {
  if (e.code !== "Space") return;

  paused = !paused;

  if (paused) {
    clearInterval(timer);
    clearInterval(score);
  } else {
    startGame();
  }
});

function quit() {
  clearInterval(timer);
  clearInterval(score);

  window.location.href = "./index.html";
}

img.onload = () => {
  drawPlayer();
  startGame();
};
