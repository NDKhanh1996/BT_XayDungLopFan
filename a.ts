enum Speed {
    slow,
    medium,
    fast,
}


class Fan {

    private on: boolean = false;
    private radius: number = 5;
    private color: string = "blue"
    private speed = Speed.slow;

    constructor() {
    }
    setStatus(status : boolean){
        this.on = status
    }
    setRadius(radius : number){
        this.radius = radius
    }
    setColor(color : string){
        this.color = color
    }
    setSpeed(speed : Speed){
        this.speed = speed
    }
    getter(){
        return `${this.on} ${this.radius} ${this.color} ${this.speed}`
    }
    toString() {
       if(this.on){
           return `${this.speed} ${this.color} ${this.radius} fan is on`
       } else {
           return `${this.color} ${this.radius} fan is off`
       }
    }
}


let fan1 = new Fan();
fan1.setSpeed(Speed.fast)
fan1.setRadius(10)
fan1.setColor('yellow')
fan1.setStatus(true)
console.log(fan1.getter())


let fan2 = new Fan();
fan2.setSpeed(Speed.medium)
fan2.setRadius(5)
fan2.setColor('blue')
fan2.setStatus(false)
console.log(fan2.getter())

