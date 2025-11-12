const canvas = document.getElementById("footer-nebula");
const ctx = canvas.getContext("2d");

const fogCanvas = document.getElementById("footer-fog-canvas");
const fctx = fogCanvas.getContext("2d");

function resizeFooter() {
  canvas.width = fogCanvas.width = window.innerWidth;
  canvas.height = fogCanvas.height = document.querySelector(".footer-section").offsetHeight;
}
resizeFooter();
window.addEventListener("resize", resizeFooter);

let t = 0;

function drawNebula() {
  t += 0.002;
  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0,0,w,h);
  for(let i=0; i<4; i++){
    let gradient = ctx.createRadialGradient(
      (Math.sin(t+i)+1)*w*0.4,
      (Math.cos(t+i*1.3)+1)*h*0.4,
      100,
      w/2,
      h/2,
      w
    );
    gradient.addColorStop(0, `rgba(122,92,255,0.55)`);
    gradient.addColorStop(1, `rgba(15,7,25,0)`);
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,w,h);
  }

  requestAnimationFrame(drawNebula);
}
drawNebula();

let fTime = 0;
function drawFog() {
  fTime += 0.01;
  const w = fogCanvas.width;
  const h = fogCanvas.height;

  fctx.clearRect(0,0,w,h);
  fctx.fillStyle = "rgba(255,255,255,0.05)";
  fctx.beginPath();
  for(let x=0; x<=w; x++){
    let y = h*0.7 + Math.sin(x*0.01 + fTime*2)*25;
    fctx.lineTo(x, y);
  }
  fctx.lineTo(w, h);
  fctx.lineTo(0, h);
  fctx.closePath();
  fctx.fill();

  requestAnimationFrame(drawFog);
}
drawFog();
