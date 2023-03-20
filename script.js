let str1="My name is";
let str2 = "Duc";

console.log(`${str1} ${str2}`);


let information = {firstname:'Duc', lastname:'Phan'};
let{firstname, lastname}=information;
console.log(firstname);
console.log(lastname);


let [firstname]=["Duc","Phan"];
console.log(firstname);

let firstname = "Phan";
let information = {firstname};


let str = "hello";
for (let char of str){
    console.log(char);
}


let arr1=[1,2,3];
let arr2=[5,6,7];

console.log([...arr1, ... arr2]);


function findleght(...args){
    console.log(args.length);
}

findleght();
findleght(1);
findleght(2,3,4);


let str ="Hello World";
console.log(str.includes('Hello'));


class Car{
    constructor(wheels,doors){
        this.wheels=wheels;
        this.doors=doors;
    }

    describMe(){
        console.log(`Doors ${this.doors} and Wheels: ${this.wheels}`);
    }
}

const car1 = new Car(4, 2);  
car1.describMe(); // Doors: 2 and Wheels: 4


function takeLongTimeAsync() {
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
    });
}

async function test() {
    const v = await takeLongTimeAsync();
    console.log(v);
}

test();


class Car {
    constructor(wheels, doors) {
       this.wheels = wheels;
       this.doors = doors;
    }
    describeMe() {
      console.log(`Doors: ${this.doors} and Wheels: ${this.wheels}`);
    }}
 
 
 const car1 = new Car(4, 2);  
 car1.describeMe(); // Doors: 2 and Wheels: 4