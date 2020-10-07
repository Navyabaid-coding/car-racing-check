class Form{
constructor(){

    this.name=createInput("Name:");
    this.button=createButton("Play");
    this.greeting= createElement("h3");
    this.title=createElement("h2");
    this.reset=createButton('Reset');
    
}
  hide(){
      this.name.hide();
      this.button.hide();
      this.greeting.hide();
      this.title.hide();


  }


display(){
   
   this.title.html("car racing");
   this.title.position(displayWidth/2-50,10);
   
    this.name.position(displayWidth/2-40,displayHeight/2-80);
  this.button.position(displayWidth/2+30,displayHeight/2);
  this.button.mousePressed(()=>{
    this.name.hide();
    this.button.hide();
     player.name= this.name.value();
        playerCount=playerCount+1;
        player.index=playerCount;
        player.update();
        player.updateCount(playerCount);

         this.greeting.html("hello "+player.name+"..wait for other players to join");
        this.greeting.position(displayWidth/2-70,displayHeight/4);

    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    })
}
    
}
