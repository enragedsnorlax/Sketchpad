let blackButton = document.getElementById("black");
blackButton.onclick = blackColorChanger;
let blueButton = document.getElementById("blue");
blueButton.onclick = blueColorChanger;
let orangeButton = document.getElementById("orange");
orangeButton.onclick = orangeColorChanger;
let randomButton = document.getElementById("random");
randomButton.onclick = randomColorChanger;
let resetButton = document.getElementById('reset');
resetButton.onclick = resetGrid;
let makeGrid64 = document.getElementById("sixtyFourGrid")
makeGrid64.onclick = grid64;

function makeGrid(v){
  resetGrid();
  var number = v;
  var gridSize = (640 / number);
  let e = document.getElementById("container");
  for(var i = 0; i < v; i++){
    var row = document.createElement("div");
    row.style.height = gridSize + "px";
    row.className = "grid";
    for(var x = 1; x <= v; x++){
    var column = document.createElement("div");
    column.style.height = gridSize + "px";
    column.style.width = gridSize + "px";
    column.className = "column";
      row.appendChild(column);
    }

    e.appendChild(row);
  }
}
makeGrid(16);


function grid64(){
  resetGrid();
  makeGrid(64);
  const column64 = document.querySelectorAll(".column")
  column64.forEach((column) => {
    column.style.bottom = "4px";
  });
  }
  
  
  function resetGrid(){
  let parent = document.getElementById('container');
  while(parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}


function RandomColorCode(){
  let letters = '789ABCD';
  var color = '#';
  for (i=0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 6)]; 
  }
  return color;
}
function blackColorChanger(){
  const gridSquares = document.querySelectorAll(".column");
  gridSquares.forEach((column) => {
    column.addEventListener('mouseover', (e) => {
      column.style.backgroundColor = "black";
    });
  });
}
function blueColorChanger(){
  const gridSquares = document.querySelectorAll(".column");
  gridSquares.forEach((column) => {
    column.addEventListener('mouseover', (e) => {
      column.style.backgroundColor = "blue";
    });
  });
}
function orangeColorChanger(){
  const gridSquares = document.querySelectorAll(".column");
  gridSquares.forEach((column) => {
    column.addEventListener('mouseover', (e) => {
      column.style.backgroundColor = "orange";
    });
  });
}
function randomColorChanger(){
  const gridSquares = document.querySelectorAll(".column");
  gridSquares.forEach((column) => {
    column.addEventListener('mouseover', (e) => {
      column.style.backgroundColor = RandomColorCode();
    });
  });
}