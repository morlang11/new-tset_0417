// Set up the canvas
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create the snowflakes
const ctx = canvas.getContext('2d');
let snowflakes = [];
for (let i = 0; i < 100; i++) {
  snowflakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 4 + 1,
    d: Math.random() * 50
  });
}

// Draw the snowflakes
function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  for (let i = 0; i < snowflakes.length; i++) {
    let f = snowflakes[i];
    ctx.moveTo(f.x, f.y);
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  moveSnowflakes();
}

// Move the snowflakes
let angle = 0;
function moveSnowflakes() {
  angle += 0.01;
  for (let i = 0; i < snowflakes.length; i++) {
    let f = snowflakes[i];
    f.y += Math.pow(f.d, 2) + 1;
    f.x += Math.sin(angle) * 2;

    // Reset the snowflake if it goes off screen
    if (f.y > canvas.height) {
      snowflakes[i] = {
        x: Math.random() * canvas.width,
        y: 0,
        r: f.r,
        d: f.d
      };
    }
  }
}

// Run the animation
setInterval(drawSnowflakes, 30);


//롤링 배너
let currentBanner = 1;
setInterval(() => {
  const container = document.querySelector(".container");
  const current = document.querySelector(`#banner${currentBanner}`);
  current.style.transform = "translateX(-100%)";
  currentBanner = currentBanner === 3 ? 1 : currentBanner + 1;
  const next = document.querySelector(`#banner${currentBanner}`);
  next.style.transform = "translateX(0)";
}, 2000);
