export class MyDate {
   

    constructor(
        public year: number = 2004, 
        public month: number = 10, 
        private _day: number = 8
        ) {}

    printFormat(): string {
        const day = this.addPadding(this.day);
        const month = this.addPadding(this.month);
        return `${day}/${month}/${this.year}`;
    }

    private addPadding(value: number){
        if (value < 10) {
        return `0${value}`;
        }
        return `${value}`;
    }

    add(amount: number, type: 'days' | 'months' | 'years'){
        if (type === 'days') {
            this._day += amount;
        }
        if (type ==='months') {
            this.month += amount;
        }
        if (type === 'years'){
            this.year += amount;
        }
    }

    get day(){
        return this._day;
    }

    get isleapYear() : boolean {
        if (this.year % 400 === 0) return true;
        if (this.year % 100 === 0) return false;
        return this.year % 4 === 0; 
    }

}

const myDate = new MyDate(2004,10,8);
console.log(myDate.printFormat());
// console.log(myDate.getDay());
console.log(myDate.day);
console.log('2023', myDate.isleapYear);

const myDate2 = new MyDate(2000,10,8);
console.log('2000', myDate2.isleapYear);

const myDate3 = new MyDate(2001,10,8);
console.log('2001', myDate3.isleapYear);

const myDate4 = new MyDate(2004,10,8);
console.log('2004', myDate3.isleapYear);