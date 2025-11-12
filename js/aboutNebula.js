const canvas = document.getElementById("about-nebula");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = document.querySelector(".about-section").offsetHeight;
}
resize();
window.addEventListener("resize", resize);

let t = 0;

function draw() {
  t += 0.01; 

  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  for (let layer = 0; layer < 4; layer++) {
    ctx.beginPath();
    ctx.moveTo(0, h / 2);

    for (let x = 0; x <= w; x += 10) {
      let y =
        h / 2 +
        Math.sin((x / w) * (2 * Math.PI) + t + layer) * 30 * (1 + layer * 0.5);
      ctx.lineTo(x, y);
    }

    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();

    let alpha = 0.1 + layer * 0.09;
    let gradient = ctx.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, `rgba(122,92,255,${alpha})`);
    gradient.addColorStop(1, `rgba(157,118,255,${alpha * 0.8})`);

    ctx.fillStyle = gradient;
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
