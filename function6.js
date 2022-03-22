const person ={
    sno: 1,
    name: "Rahul",
    city: "Chennai"
}

console.log(person.name);
console.log(person["city"])

person.desig = "Manager"

console.log(person)

citizen = person

console.log(citizen)
citizen.country="india"

console.log(citizen)
console.log(person)

candidate = {...person}

console.log(candidate)
candidate.state = 'tamil nadu'

console.log(candidate)
console.log(person)
