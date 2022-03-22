a=[34,36,64,64,306]

console.log(a[0])
console.log(a.length)
console.log(a[9])
a[3]=4903
console.log(a)
a[90]=330
console.log(a)
console.log(a.length)

for(let x=0;x<a.length;x++)
   console.log(x,"-",a[x])

   console.log("--------------------------------------")

for(let x in a)
 console.log(x,"-",a[x])

 console.log("--------------------------------------")

for(let x of a)
console.log(x)

console.log("--------------------------------------")
let p=[1,2,4,56]

for(let x of p)
  console.log(x)