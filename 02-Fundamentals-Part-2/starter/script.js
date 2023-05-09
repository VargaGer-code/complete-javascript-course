const neighbours = ["Slo", "AU", "HR", "SRB"];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop("Utopia");
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

const indexOfHR = neighbours.indexOf("HR");
console.log(indexOfHR);
neighbours[indexOfHR] = "Hrvat";
console.log(neighbours);

// Objects

const myCountry = {
  country: "HU",
  capital: "BP",
  language: "HUN",
  population: 9000000,
  neighbours: ["Slo", "AU", "HR", "SRB"],

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language} speaking people,
    ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
  },

  checkIsLand: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

//console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people,
// ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`)

myCountry.population = 11000000;
console.log(myCountry.population);
myCountry["population"] = 9000000;
console.log(myCountry.population);

console.log(myCountry.describe());
myCountry.checkIsLand();
console.log(myCountry.isIsland);

const objectMark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const objectJhon = {
  fullName: "Jhon Smith",
  mass: 912,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

objectMark.calcBMI();
objectJhon.calcBMI();

console.log("Mark BMI :: " + objectMark.bmi);

if (objectMark.calcBMI() > objectJhon.calcBMI()) {
  console.log(`${objectMark.fullName} BMI (${objectMark.bmi})
     is higher than ${objectJhon.fullName} (${objectJhon.bmi}) BMI`);
} else if (objectMark.calcBMI() < objectJhon.calcBMI()) {
  console.log(`${objectJhon.fullName} BMI (${objectJhon.bmi})
    is higher than ${objectMark.fullName} (${objectMark.bmi}) BMI`);
}

const myBestArray = ["Slo", 10, true, "SRB"];
for (let i = 0; i < myBestArray.length; i++) {
  if (typeof myBestArray[i] !== "string") continue;

  console.log(myBestArray[i]);
}

for (let i = 0; i < myBestArray.length; i++) {
  if (typeof myBestArray[i] === "number") break;

  console.log(myBestArray[i]);
}

console.log("########### bacwards");
for (let i = myBestArray.length - 1; i >= 0; i--) {
  console.log(myBestArray[i]);
}

console.log("########### For");
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting rep nr.: ${rep}`);
}

console.log("########### While");
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting rep nr.: ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6 + 1);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);
  if (dice === 6) {
    console.log("Its a 6");
  }
}
