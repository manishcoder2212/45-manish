class Enemy{
    constructor(m,a){
       var order1 ={
           restitution:0,
        friction:10
        }
        this.box=Bodies.rectangle(m,a,10,40,order1);
        World.add(world,this.box);
       // this.image=loadImage("images/wood1.png")
    }
    
    
    
    
    display(){
                       rectMode(CENTER)
                       fill  ("blue")  
                       strokeWeight(1)
                       rect(this.box.position.x,this.box.position.y,10,40);
    }
    
    
    
    
    
    }
    