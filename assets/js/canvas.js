/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const particles = [];

function init() {
  for (let i = 0; i < 200; i++) {
    particles.push({
      x: randomAInt(0, 600),
      y: randomAInt(0, 600)
    });
  }
}

function draw() {
  requestAnimationFrame(draw);
  ctx.clearRect(0, 0, 600, 600);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
  ctx.strokeStyle = 'rgba(0, 153, 255, 0.4)';
  generateAnimation(ctx, 200);
  ctx.save();
}

function update_particle(particle) {

}

/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 * @param {number} node_count 
 */
function generateAnimation(ctx, node_count) {

  for (let i = 0; i < particles.length; i++) {
    update_particle(particles[i]);
  }

}

function randomAInt(min, max) {
  return Math.random() * (max - min) + min;
}

init();
draw();