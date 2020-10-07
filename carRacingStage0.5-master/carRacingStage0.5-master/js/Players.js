class Player{
    constructor(){
        this.index=null;
        this.name=null;
        this.distance=0;
        this.rank=null;
    }
    getCount(){

    var playerCountRef=database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
   
        playerCount=data.val();    
    })
}

    updateCount(Count){
    database.ref("/").update({
        playerCount:Count
    })
}
    update(){
        
    var playerIndex="players/player"+ this.index;
    database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance
    
    })
}

static getPlayerInfo(){
    var playerInfoRef=database.ref("players");
    playerInfoRef.on("value",(data)=>{
   
       allPlayers=data.val();    
    })
}

getCarsAtEnd(){

    database.ref('carsAtEnd').on("value",(data)=>{
        this.rank=data.val();
    })
}
static updateCarsAtEnd(rank){
  database.ref('/').update({
      carsAtEnd:rank
  })

}
}
