function Sprite (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.drawSprite = function(xCanvas, yCanvas){
        ctx.drawImage(img, this.x, this.y, this.width, this.height, xCanvas, yCanvas, this.width, this.height);
    },

    this.drawImage = function(obj_img, x, y){
        ctx.drawImage(obj_img, x, y);
    }

}

var background = new Sprite(0, 0, 900, 600);
