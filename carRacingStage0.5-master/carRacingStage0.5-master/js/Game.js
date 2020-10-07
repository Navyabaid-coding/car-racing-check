class Game{
    constructor(){

    }

    getState(){
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",function(data){
       
          gameState=data.val();    
        })
    }

    update(State){
        database.ref("/").update({
            gameState:State
        })
    }

   async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef=await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            }
          
            form=new Form();
            form.display();
        }
        car1=createSprite(100,200);
        car1.addImage("car1", car1Image);
        car2=createSprite(300,200);
        car2.addImage("car2", car2Image);
        car3=createSprite(500,200);
        car3.addImage("car3", car3Image);
        car4=createSprite(700,200);
        car4.addImage("car4", car4Image);

        cars=[car1,car2,car3,car4]
    }
    play(){
        form.hide();
              //  text("THE GAME STARTS!",120,100);
        Player.getPlayerInfo();
        player.getCarsAtEnd();

                
                
    if(allPlayers !== undefined){

        background(rgb(198,135,103));
        image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5)
      //  var display_position = 130;
      var index=0;
      //x and y positions of the car
      var x=175;
      var y;


        for(var plr in allPlayers){
       /* if (plr === "player" + player.index)
        fill("red")
        else fill("black");
        display_position+=20; textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)*/

        //add 1 to the index for every loop
        index=index+1;
        //positioning the cars
        x=x+200;
        y=displayHeight-allPlayers[plr].distance;
        cars[index-1].x=x;
        cars[index-1].y=y;
        if(index===player.index){
            cars[index-1].shapeColor="red";
            camera.position.x=displayWidth/2;
            camera.position.y=cars[index-1].y;

        }



        }



    }
 if(keyIsDown(UP_ARROW) && player.index !== null){

    player.distance+=10;
    player.update();
 }
 if(player.distance>3860){
     gameState=2;
     player.rank=player.rank+1;
     Player.updateCarsAtEnd(player.rank);
 }


    
   drawSprites();               
 
}
//console.log("gameEnded");

end(){
    console.log("Game Ended");
}



}