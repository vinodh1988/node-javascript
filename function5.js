function callme(a){
    console.log("call me started working")
    a("India")
    console.log("call me still working")
    a("Russia")
    console.log("Call me finished")
} //a is a function

callme(function(data){
    console.log(data," is received")
})

//callback function is a function which is passed as parameter to another function