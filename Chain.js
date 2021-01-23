class Chain{

      constructor(p,q){
     var options={
        bodyA:p,
        bodyB:q ,
        length:0
 
     }

   this.chain=Constraint.create(options)
   World.add(world,this.chain);
 

}
      

   display() {
     
      if (this.chain.bodyA ){
         stroke ("brown")
         strokeWeight (60)
        
         line (this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x-150,this.chain.bodyB.position.y)
               
                 }
       

        
      }

      
         
      

      disconectStone(){
         this.chain.bodyA=null 
      }



   }

