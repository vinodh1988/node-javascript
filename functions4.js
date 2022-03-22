a=()=>{
    console.log("Hi")
}

b=(a,b)=>a+b

a()
console.log(b(1,23))

c=()=>"Hello"


d=c

function fun(){
    console.log("funny...")
}

e=fun
console.log(d())

e()