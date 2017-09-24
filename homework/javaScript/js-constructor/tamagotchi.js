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

    puke(){
        this.health--;
        console.log("Meow");
        console.log("New value " + this.foodInTummy);
    }
    yawn(){
        this.restedness--;
        console.log(this.name + "has current restedness of" + this.restedness);
        
    }
    start(){
            console.log("Starting " + this.name);
            var here = this;
            this.hungerTimer = setInterval(()=>{
                here.cry();
            }, 6000)
            this.yawnTimer = setInterval(() =>{
                here.yawn();
            }, 10000)
            this.sickTimer = setInterval(() =>{
                here.puke();
            }, 20000)
        };
       stop(){
           console.log("Stop" + this.name);
           clearInterval(this.hungerTimer);
           clearInterval(this.yawnTimer);
           clearInterval(this.sickTimer);
       }

};  
//create new Tamagotchis
var constructorObj1 = new watsupTamagotchi();
var constructorObj2 = new watsupTamagotchi("John");

console.log(constructorObj1);
console.log(constructorObj2);

constructorObj1.cry();
constructorObj2.puke();


//test out your Tamagotchies below via console.logs
console.log(watsupTamagotchi);

var john = new watsupTamagotchi("john");
john.start();