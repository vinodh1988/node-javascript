a=function(){
    console.log("Hi")
}

b=function(a,b){
    return a+b
}

a()
console.log(b(1,23))

c=function(){
    return "Hello"
}

d=c

function fun(){
    console.log("funny...")
}

e=fun
console.log(d())

e()