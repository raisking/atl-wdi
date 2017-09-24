console.log('tamagotchi file is loaded');

//your class declaration here
class watsupTamagotchi{
    constructor(name, creatureType){
        this.name = name;
        this.creatureType = creatureType;
        this.foodInTummy = 10;
        this.restedness = 10;
        this.health = 10;
    }

    cry() {
        this.foodInTummy--;
        console.log("WAHH!!!");
        console.log(this.name + "New value " + this.foodInTummy);
    };

}


    
//create new Tamagotchis


//test out your Tamagotchies below via console.logs
