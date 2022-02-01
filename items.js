class Coin {
    constructor(game,x,y) {
        Object.assign(this,{game,x,facing});
        this.spritesheet = ASSET_MANAGER.getAsset("./resources/powerUps/coin.png");
        //this.animation = new Animator(this.spritesheet,86,908,96,104,10,0.1,2,false,true);
        this.y = 0;
        this.x = 0;
        this.animation = [];
        this.loadProperties();
        this.loadAnimation();
    };
    loadAnimation() {
        // Coin
        this.animation[0] = new Animator(this.spritesheet,58,50,64,64,11,0.15,11.2,false,true);

        
    };
    loadProperties() {
        //facings
        this.LEFT = 0;
        this.RIGHT = 1;

        //restrictions
        this.SPEED = 0.4;
        this.HEIGHT = 5;
    };
    update() {
        if (this.facing == this.LEFT) {
            this.animation.drawFrame(this.game.clockTick,ctx,this.x,this.y,0.5); 
        } else {
            this.animation.drawFrameReverse(this.game.clockTick,ctx,this.x,this.y,0.5);   
        } 
    };
    draw(ctx) {
        this.animation[0].drawFrame(this.game.clockTick,ctx,250,100,1);      
        
    };
};

class SmallFireBall {
    constructor(game,x,y) {
        Object.assign(this,{game,x,y});
        this.spritesheet = ASSET_MANAGER.getAsset("./resources/enemies/boss.png");
        //this.animation = new Animator(this.spritesheet,86,908,96,104,10,0.1,2,false,true);
        this.y = 0;
        this.x = 0;
        this.animation = [];
        this.loadProperties();
        this.loadAnimation();
    };
    loadAnimation() {
        // Coin
        this.animation[0] = new Animator(this.spritesheet,390,308,24,16,3,0.15,3,false,true);
    };
    loadProperties() {
        //facings
        this.LEFT = 0;
        this.RIGHT = 1;

        //restrictions
        this.SPEED = 0.4;
        this.HEIGHT = 5;
    };
    update() {
        if (this.facing == this.LEFT) {
            this.animation.drawFrame(this.game.clockTick,ctx,this.x,this.y,0.5); 
        } else {
            this.animation.drawFrameReverse(this.game.clockTick,ctx,this.x,this.y,0.5);   
        } 
    };
    draw(ctx) {
        this.animation[0].drawFrame(this.game.clockTick,ctx,300,0,1);      
        
    };
};

class FireBall {
    constructor(game,x,y) {
        Object.assign(this,{game,x,y});
        this.spritesheet = ASSET_MANAGER.getAsset("./resources/enemies/boss.png");
        //this.animation = new Animator(this.spritesheet,86,908,96,104,10,0.1,2,false,true);
        this.y = 0;
        this.x = 0;
        this.animation = []
        this.loadProperties();
        this.loadAnimation();
    };
    loadAnimation() {
        // Coin
        this.animation[0] = new Animator(this.spritesheet,58,300,56,32,3,0.15,7,false,true);
    };
    loadProperties() {
        //facings
        this.LEFT = 0;
        this.RIGHT = 1;

        //restrictions
        this.SPEED = 0.4;
        this.HEIGHT = 5;
    };
    update() {
        if (this.facing == this.LEFT) {
            this.animation.drawFrame(this.game.clockTick,ctx,this.x,this.y,0.5); 
        } else {
            this.animation.drawFrameReverse(this.game.clockTick,ctx,this.x,this.y,0.5);   
        } 
    };
    draw(ctx) {
        this.animation[0].drawFrame(this.game.clockTick,ctx,350,0,1);      
        
    };
};

class AirSlash {
    constructor(game,x,y) {
        Object.assign(this,{game,x,y});
        this.spritesheet = ASSET_MANAGER.getAsset("./resources/powerUps/airSlash.png");
        this.y = 0;
        this.x = 0;
        this.loadProperties();
        this.loadAnimation();
    };
    loadAnimation() {
        this.animation = new Animator(this.spritesheet,8,90,56,112,1,1,0,false,true);
    };
    loadProperties() {
        //facings
        this.LEFT = 0;
        this.RIGHT = 1;

        //restrictions
        this.SPEED = 0.4;
        this.HEIGHT = 5;
    };
    update() {
        if (this.facing == this.LEFT) {
            this.animation.drawFrame(this.game.clockTick,ctx,this.x,this.y,0.5); 
        } else {
            this.animation.drawFrameReverse(this.game.clockTick,ctx,this.x,this.y,0.5);   
        } 
    };
    draw(ctx) {  
        if (this.facing == this.LEFT) {
            this.animation.drawFrame(this.game.clockTick,ctx,this.x,this.y,0.5); 
        } else {
            this.animation.drawFrameReverse(this.game.clockTick,ctx,this.x,this.y,0.5);   
        }      
    };
};

class BirdBrown {
    constructor(game,x,facing) {
        Object.assign(this,{game,x, facing});
        this.spritesheet = ASSET_MANAGER.getAsset("./resources/background/bird.png");
        //this.animation = new Animator(this.spritesheet,86,908,96,104,10,0.1,2,false,true);
        this.y = 0;

        this.loadProperties();
        this.loadAnimation();
    };

    loadAnimation() {
        this.animation = new Animator(this.spritesheet,8,13,72,56,6,0.15,14.7,false,true);
    };

    loadProperties() {
        //facings
        this.LEFT = 0;
        this.RIGHT = 1;

        //restrictions
        this.SPEED = 0.4;
        this.HEIGHT = 5;
        this.y = this.HEIGHT;
    };

    update() {
        if (this.facing == this.LEFT) {

                this.x -= this.SPEED;

        } else if (this.facing == this.RIGHT) {

                this.x += this.SPEED;
        }
    };
    

    draw(ctx) { 
        if (this.facing == this.LEFT) {
            this.animation.drawFrame(this.game.clockTick,ctx,this.x,this.y,0.5); 
        } else {
            this.animation.drawFrameReverse(this.game.clockTick,ctx,this.x,this.y,0.5);   
        }  
        
    };
};