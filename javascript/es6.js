//ES6 => ECMA SCript Standard 6
//1. Variable declarations -> refer variables.js
//2. Scope 
// var- Global SCope
// let- local/Block Scope
// const- Global Scope
var a=10
const con=3.14
console.log(a)
console.log(con)
{
    let a=20
    let b=30
    console.log(a);
    console.log(b);
}
console.log(a)
console.log(con)

//3. Class and objects

class ClassEg{
    a=10
}
obj= new ClassEg()
console.log(obj.a);

//constructor

class ClassEg{
    constructor(){
        this.a=10
    }
}
obj= new ClassEg()
console.log(obj.a);

//Arrow functions
funInClass=() => {
    console.log(this.a);
}
obj=new ClassEg()
console.log(obj.funInClass())

//5. Ternary operator
a=10
console.log(a%2==0?"Even":"Odd");

//6.Spread Operator  
a=[10,20,30,40]
b=[50,60,70]
c=[...b,...a]
console.log(c);

//7.Rest Operator[...]
function restOpEg(a,b,...arg){
    console.log(a)
    console.log(b)
    console.log(arg)
}
restOpEg(10,20,30,40,50)

//8.Destructing operator
var array=[10,20,30]
var [a,b,c,d]=array
arrayconsole.log(a,b,c,d);

//9.Hoisting 
//variable hoisting
console.log(a);
var a=10;
console.log(a); 

console.log(a);
let a=10; 

console.log(c);
const c=10;

//2.Function Hoisting
console.log(fun());
function fun(){
    return 10
}