function greet(){
    console.log("Hi")
}

function sayHi(p){
     console.log("Hi ",p)
}

greet()
sayHi("Naveen")
greet("ram") //javascript ignore un necassary paramters that are passed
sayHi() //javascript assumes the parameter to be undefined if not passed
sayHi("Naveen","Ram") //javascript ignores extra parameters
console.log(greet())//if a function is not returning anything by default the return value is undefined