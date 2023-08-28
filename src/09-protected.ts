export abstract class Animal {
    constructor(protected name: string){}

    move(){
        console.log('Moving along!');   
    }

    greeting(){
        return `Hello I'm ${this.name}`;
    }

    protected doSomething(){
        console.log('LOOOL');
        
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
            console.log(`woof ${this.name}`);
        }
        this.doSomething();
    }

    move() {
        console.log('*se mueve como perro*');
        super.move();
        
    }
}


const max = new Dog('maxeverto', 'jose');
console.log(`Mi dueño es: ${max.owner}`);
max.woof(1);
max.move();

