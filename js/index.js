window.onload = function() {
  //Get The Canvas and Context & store them in vars

  var canvas = document.getElementById("sky");
  var ctx = canvas.getContext("2d");

  //Set Canvas Dims To Window Height & Width
  var W = window.innerWidth;
  var H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  //Generate The Snowflakes and Apply Attributes

  var mf = 1000; //max number of snowflakes
  var flakes = [];

  //Loop Through The Empty Flakes and Apply Attributes

  for (var i = 0; i < mf; i++) {
    flakes.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 0.8,
      d: Math.random() + 0.8,
    });
  };
 
  
  //Draw Flakes Onto Canvas
  function drawFlakes() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    for (var i = 0; i < mf; i++) {
      var f = flakes[i];
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    moveFlakes();
  }

  //Animate The flakes
  var angle = 0;
  function moveFlakes() {
    angle += 0.01;
    for (var i = 0; i < mf; i++) {
      //Store Current Flake
      var f = flakes[i];
      //Update X & Y coords For Each SnowFlake
      f.y += Math.pow(f.d, 2) + 1;
      f.x += Math.sin(angle) * 2;
      //If Snow Reaches The Bottom Send A new One From The Top
      if (f.y > H) {
        flakes[i] = {
          x: Math.random() * W,
          y: 0,
          r: f.r,
          d: f.d
        }
      }
    }
  }
  setInterval(drawFlakes, 15);
}
