/*$(document).ready(function(){

    var can = $('#cnv')[0]
    var w = can.width
    var h = can.height
    var cont = can.getContext('2D')
    var snake

    function Snake(){
        this.x = 0
        this.y = 0
        this.xvelocity = 1
        this.yvelocity = 0

        this.update = function() {
            this.x += this.xvelocity
            this.y += this.yvelocity
        }

        this.show = function() {
            
        }

    }


})*/


let snake
const snakeThickness = 20
let snakeSpeed = 1
let food

function setup() {
  let maxSize = min(innerHeight, innerWidth)
  let canvasSize = floor(maxSize/snakeThickness) * snakeThickness
  let cnv = createCanvas(canvasSize, canvasSize)
  cnv.id('cnv')
  snake = new Snake()
  frameRate(5)
  pickLocation()
}

function pickLocation() {
  let cols = floor(width / snakeThickness)
  let rows = floor(height / snakeThickness)
  food = createVector(floor(random(cols)), floor(random(rows)))
  food.mult(snakeThickness)
}

function draw() {
  background(20)
  if (snake.eat(food)) {
    pickLocation()
  }
  snake.checkDeath()
  snake.update()
  snake.show()
  fill(20, 200, 100)
  rect(food.x, food.y, snakeThickness, snakeThickness)
}

function windowResized(){
    let newSize = floor(min(innerWidth, innerHeight)/snakeThickness) * snakeThickness
    resizeCanvas(newSize, newSize)
    console.log("resized")
}
  
function keyPressed(){
  if(keyCode === UP_ARROW || keyCode === 90){ //Z
    snake.direc(0, -1*snakeSpeed)
  }else{
    if(keyCode === RIGHT_ARROW || keyCode === 68){  //D
      snake.direc(snakeSpeed, 0)
    }else{
      if(keyCode === DOWN_ARROW || keyCode === 83){
        snake.direc(0,snakeSpeed)
      }else{
        if(keyCode === LEFT_ARROW || keyCode === 81){
          snake.direc(-1*snakeSpeed, 0)
        }
      }
    }
  }

  if(keyCode == 107){ //numPad +
    snake.addLength()
  }
}


function Snake(){
    this.x = floor(width/2)
    this.y = floor(height/2)
    this.xv = snakeSpeed //x velocity
    this.yv = 0 //y velocity
    this.total = 0
    this.tail = []

    this.update = function() {
        for (let i = 0; i < this.tail.length - 1; i++) {
           this.tail[i] = this.tail[i + 1]
        }
        if (this.total >= 1) {
           this.tail[this.total - 1] = createVector(this.x, this.y);
        }
        this.x += this.xv * snakeThickness
        this.y += this.yv * snakeThickness
        this.x = constrain(this.x, 0, width - snakeThickness)
        this.y = constrain(this.y, 0, height - snakeThickness)
    }

    this.eat = function(pos) {
      let d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total++;
        return true;
      } else {
        return false;
      }
    };

    this.show = function(){
        fill(200)
        for (let i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, snakeThickness, snakeThickness)
        }
        rect(this.x, this.y, snakeThickness, snakeThickness)
    }

    this.direc = function(xval, yval){
        this.xv = xval
        this.yv = yval
    }

    this.addLength = function(){
        this.total++
    }

    this.death = function(){
        this.x = floor(random(width - 5*snakeThickness) / snakeThickness) * snakeThickness
        this.y = floor(random(height) / snakeThickness) * snakeThickness
        this.xv = snakeSpeed
        this.yv = 0
        this.total = 0
        this.tail = []
        //alert('Game over!')
    }

    this.checkDeath = function(){
        for (let i = 0; i < this.tail.length; i++) {
            let pos = this.tail[i]
            let d = dist(this.x, this.y, pos.x, pos.y)
            if (d < 1) {
              this.death()        
            }
        }
        if((this.x == 0 && this.xv == -1 * snakeSpeed) || (this.y == 0 && this.yv == -1 * snakeSpeed) || (this.x == width - snakeThickness && this.xv == snakeSpeed) || (this.y == height - snakeThickness && this.yv == snakeSpeed)){
            this.death()
        }
    }
}
