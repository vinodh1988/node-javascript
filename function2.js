function fun(){
   console.log(arguments)

   for(let x in arguments)
    console.log(arguments[x])
}

fun(1)
fun("Raj")
fun(1,"Rahul")
fun()
fun(1,234,35,67)
