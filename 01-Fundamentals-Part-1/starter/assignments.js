const WEIGHT_MARK = 78
const HEIGHT_MARK = 1.69
const WEIGHT_JHON = 92
const HEIGHT_JHON = 1.95
const ass = "Asss"
console.log(`Hello ${ass}`)

const markBMI = WEIGHT_MARK / HEIGHT_MARK ** 2
console.log("Mark BMI :: " + markBMI)
const jhonBMI = WEIGHT_JHON / HEIGHT_JHON ** 2
console.log("Jhon BMI :: " + jhonBMI)

let markHigherBMI = markBMI > jhonBMI
console.log(markHigherBMI)

console.log(`ezt
háromba
töri`)

if (markBMI > jhonBMI) {
    console.log(`Marks BMI (${markBMI}) is higher than Jhons BMI (${jhonBMI})`)
} else {
    console.log(`Jhons BMI is higher than Marks BMI`)
}


let age = 15

if (age >= 18) {
    console.log("Go drive")
} else {
    let yearsLeft = 18 - age
    console.log(`${yearsLeft} years left..`)
}

const birthDate = 1991
let century

if(birthDate <= 2000) {
    let century = 20
} else {
    let century = 21
}