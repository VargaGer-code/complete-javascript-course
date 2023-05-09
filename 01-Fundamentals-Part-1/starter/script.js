let js = "Amaizing"
//if (js === "Amaizing") alert("Yoo")
//console.log("ASs")
let PI = 3.14

const age = 16

age >= 18 ? console.log("Ok") : console.log("nem ok")

const drink = age >= 18 ? "Beer" : "water"
console.log(drink)


const bill = 301
const tip = bill >= 50 && bill <= 300 ? (bill / 100) * 15 : (bill / 100) * 20

console.log(tip)

console.log(`The bill was: ${bill}$, the tip was: ${tip}$. Overall you pay: ${bill + tip}$`)