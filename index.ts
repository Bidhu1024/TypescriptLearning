// const inputs = document.querySelectorAll("input")
// console.log(inputs);
// const log = "df"
// console.log(log);

// const square = (num:number)=>{
//     return num * num;
// }
// console.log(square(9));

// let names = ["luigi", "mario", "yoshi"];
// names.push("toad");
// names.push(6);


//explicit types in js
let character:string;
let age:number;
let isBlackBelt:boolean;

//arrays

let ninja: string[]=[];

//union type

let mixed:(string | number )[] = []


//objects

let ninjaOne: object;
ninjaOne={
    name:"Yoi",
    age:29
}

// vid 6 on any
let person :{name:any, age:any};

person={name:52, age:"dd"}
console.log(person);
// Typescript any 
