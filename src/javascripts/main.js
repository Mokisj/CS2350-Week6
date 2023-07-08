//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"

// function render(){
//   let c = document.querySelector('canvas')

//   if(c.getContext){
//     let ctx = c.getContext('2d')
//     ctx.fillStyle = 'black'
//     ctx.fillRect(50, 100, 60, 30)
//   }
// }

function drawScene() {
  let canvas = document.getElementById("Canvas");
  let ctx = canvas.getContext("2d");

  // Draw sky
  ctx.fillStyle = "skyblue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw sun
  ctx.fillStyle = document.getElementById('c').value;
  ctx.beginPath();
  ctx.arc(document.getElementById('x').value, 50, 40, 0, 2 * Math.PI);
  ctx.fill();

  //ground
  ctx.fillStyle = "brown";
  ctx.fillRect(0, 300, canvas.width, canvas.height - 100);

  //grass
  ctx.fillStyle = "green";
  ctx.fillRect(0, 300, canvas.width, 10);

  //trunk
  ctx.fillStyle = "#4d3319";
  ctx.fillRect(120, 200, 40, 100);

  //top
  ctx.fillStyle = "#006400";
  ctx.beginPath();
  ctx.moveTo(135, 100);
  ctx.lineTo(90, 200);
  ctx.lineTo(200, 200);
  ctx.closePath();
  ctx.fill();

  

}

document.body.onload = drawScene
document.getElementById('x').onchange = drawScene
document.getElementById('c').onchange = drawScene
drawScene();
