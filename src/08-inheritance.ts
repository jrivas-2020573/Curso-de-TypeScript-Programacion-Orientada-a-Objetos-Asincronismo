export class Animal {
    constructor(public name: string){}

    move(){
        console.log('Moving along!');   
    }

    greeting(){
        return `Hello I'm ${this.name}`;
    }
}

export class Dog extends Animal{

    constructor(
        name: string,
        public owner: string
    ) {
       super(name);
    }

    woof(times: number){
        for(let i = 0; i < times; i++){
            console.log('woof >:(');
        }
    }
}

const fifi = new Animal('Firulais');
fifi.move();
console.log(fifi.greeting());

const max = new Dog('maxeverto', 'jose');
max.move();
console.log(max.greeting());
max.woof(5);
console.log(max.owner);

