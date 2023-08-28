import {Dog} from './09-protected';

// function getValue(value: unknown) {
//     return value;

// }

// function getValue(value: string | number) {
//     return value;

// }

function getValue<myType>(value: myType) {
    const array: myType[] = [value];
    return value;

}

getValue<number>(12).toFixed();
getValue<string>('12').toLocaleLowerCase();
getValue<number[]>([11,1,1]).forEach;
const max = new Dog('max', 'juan');
getValue<Dog>(max).greeting;
