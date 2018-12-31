var nodes = [];
nodes[0] = [0, 0, 0];
function setup(){
  createCanvas(640,360, WEBGL);
  for (var i = 0;i<10;i++){
    nodes.push([random(200), random(200), random(200)]);
  }
}
function draw(){
  background(0);
  orbitControl();
  for (var i = 0;i<nodes.length;i++){
    fill(100);
    noStroke();
    push();
    translate(nodes[i][0], nodes[i][1], nodes[i][2]);
    sphere(10);
    pop();
  }
}
