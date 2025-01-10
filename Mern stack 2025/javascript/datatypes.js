a="SECE"
console.log("A "+a)
b=true
console.log("b "+b)
console.log("type is"+typeof(a))

array=['a',10,true,[20,30],"Sri Eshwar"]
console.log(array)
console.log(typeof(array))

obj={
    firstname:"Sri",
    lastname:"Eshwar"
}
console.log(obj)
console.log(typeof(obj))

obj1={}
console.log(obj1)
obj1["dept"]="CSE"
obj1["sec"]="A"
console.log(obj1)

obj2=new Object()
console.log(obj2);
obj2.count =70
obj2.abs=1
totalPresentCount=obj2.count-obj2.abs
console.log("Present "+totalPresentCount)
console.log(obj2)



//set
set=new Set()
console.log(typeof(set))
console.log(set);

set=new Set("helloa",1,2,"SECE")
console.log(typeof(set));
console.log(set);

set=new Set(["helloa",1,2,"SECE"])
console.log(typeof(set));
console.log(set);  