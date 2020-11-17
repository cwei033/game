class Player {
  constructor() {
    this.w = 130;
    this.h = 80;
    this.x = w / 2;
    this.y = h - this.h;
    this.direction = 'still';
    this.speed = 2;
  }

  display() {
    // rect(this.x, this.y, 120, 60);
    // image(playerImg, this.x, this.y, 122, 60);
    switch (this.direction) {
      case 'still':
        image(playerImg, this.x, this.y, this.w, this.h);
        break;
      case 'up':
        if (this.y > 0) {
          image(playerImg, this.x, this.y, this.w, this.h);
        }
        break;
      case 'down':
        if (this.y < h - this.h) {
          image(playerImg, this.x, this.y, this.w, this.h);
        }
        break;
      case 'left':
        if (this.x > 0) {
          image(playerFlipImg, this.x, this.y, this.w, this.h);
        }
        break;
      case 'right':
        if (this.x < w - this.w) {
          image(playerImg, this.x, this.y, this.w, this.h);
        }
        break;
      default:
        break;
    }
  }

  move() {
    switch (this.direction) {
      case 'still':
        break;
      case 'up':
        if (this.y > 0) {
          this.y -= this.speed;
        }
        break;
      case 'down':
        if (this.y < h - this.h) {
          this.y += this.speed;
        }
        break;
      case 'left':
        if (this.x > 0) {
          this.x -= this.speed;
        }
        break;
      case 'right':
        if (this.x < w - this.w) {
          this.x += this.speed;
        }
        break;
      default:
        break;
    }
  }
}
