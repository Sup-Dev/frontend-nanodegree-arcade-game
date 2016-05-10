// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {  
  this.sprite = 'images/char-boy.png';
  // block distance
  this.xdist = 101;
  this.ydist = 83
  // player start position
  this.x = (this.xdist)*2;
  this.y = (this.ydist)*5 - ((this.ydist)/2);
  // player speed
  this.xspeed = 0;
  this.yspeed = 0
};

Player.prototype.update = function(dt) {
  //console.log(this.x, this.y);
  var xnew = this.x + (this.xspeed * this.xdist);
  var ynew = this.y + (this.yspeed * this.ydist);
  
  // check bounds x-axis
  if (xnew <= 0) {
    this.x = 0;
  } else if (xnew >= 404) {
    this.x = 404;
  } else {
    this.x += (this.xspeed * this.xdist);
  }
  
  // check bounds y-axis
  if (ynew >= 373.5) {
    this.y = 373.5;
  } else if (ynew <= 41.5) {
    this.y = 41.5;
  } else {
    this.y += (this.yspeed * this.ydist);
  }
    
  // reset speed
  this.xspeed = 0;
  this.yspeed = 0;
};

Player.prototype.render = function() {
  //console.log(this.x, this.y);
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPress) {
  console.log(keyPress);
  if (keyPress == 'left') {
    this.xspeed = -1;
  } else if (keyPress == 'right') {
    this.xspeed = 1;
  } else if (keyPress == 'up') {
    this.yspeed = -1;
  } else if (keyPress == 'down') {
    this.yspeed = 1
  }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [new Enemy(), new Enemy(), new Enemy()];
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
