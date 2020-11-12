'use strict';
let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coins = [];
let playerImg;
let coinsImg;

function preload() {
  playerImg = loadImage('assets/Pumpkin.png')
  coinsImg = loadImage('assets/Candy(purple).png')
}

function setup() {
  cnv = createCanvas(w, h);
  textFont('monospace');

  player = new Player();
  coins[0] = new Coins();
}

function draw() {

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    default:
      break;
  }

  // if (keyIsDown(LEFT_ARROW)) {
  //   player.direction = 'left';
  // } else if (keyIsDown(RIGHT_ARROW)) {
  //   player.direction = 'right';
  // } else if (keyIsDown(UP_ARROW)) {
  //   player.direction = 'up';
  // } else if (keyIsDown(DOWN_ARROW)) {
  //   player.direction = 'down';
  // } else if (key = ' ') {
  //   player.direction = 'still';
  // }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.direction = 'left';
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right';
  } else if (keyCode == UP_ARROW) {
    player.direction = 'up';
  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down';
  }
}

function keyReleased() {
  player.direction = 'still';
}

function title() {
  background(220);
  textSize(80);
  fill(255);
  textAlign(CENTER);
  text('MY GAME', w / 2, h / 5);
  textSize(30);
  text('click anywhere to start', w / 2, h / 2);
}

function titleMouseClicked() {
  state = 'level 1';
}

function level1() {
  background(0);

  if (random(1) <= 0.01) {
    coins.push(new Coins());
  }

  player.display();
  player.move();

  // three ways to loop through array
  for (let i = 0; i < coins.length; i++) {
    coins[i].display();
    coins[i].move();
  }
  // coins.forEach(function(coin){
  //   coin.display();
  //   coin.move();
  // })
  // for (let coin of coins){
  //   coin.display();
  //   coin.move();
  // }

  for (let i = coins.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2) {
      points++;
      coins.splice(i, 1);
    } else if (coins[i].y > h) {
      coins.splice(i, 1);
    }
  }

  text(`points: ${points}`, w / 2, h / 5);

}

function level1MouseClicked() {
  // points++;
  // console.log('points = ' + points);
  // if (points >= 10) {
  //   state = 'you win';
  // }
}

function youWin() {
  background('orange');
  textSize(80);
  fill(255);
  text('YOU WIN', w / 2, h / 5);
  textSize(30);
  text('click anywhere to restart', w / 2, h / 2);
}

function youWinMouseClicked() {
  state = 'level 1';
  points = 0;
}
