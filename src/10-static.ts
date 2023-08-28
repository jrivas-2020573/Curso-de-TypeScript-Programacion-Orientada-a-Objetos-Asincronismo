console.log('Math.PI', Math.PI);
console.log(Math.max(1,2,2,23,4,3));


class MyMath {
   static readonly PI = 3.14;

   static max(...numbers: number[]) {
    return numbers.reduce((max, item) => (max >= item ? max: item), numbers[0]);
   }
}

// const math = new MyMath();
// math.PI;

console.log('My Math', MyMath.PI);
console.log('MyMath.Max', MyMath.max(1,2,2,34,5));
const numbers = [12, 2, 1, 111134,9 ,300000];
console.log('MyMath.max', MyMath.max(...numbers));
console.log('MyMath.max', MyMath.max(-1, -9, -8));





