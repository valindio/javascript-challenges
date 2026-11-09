// Personal Dashboard

const personalData = {
    name : "Dio",
    age : 20,
    country : "Indonesia",
    developer : true,
    skill : ["JavaScript", "TypeScript", "NodeJs"],
    balance : null
}

console.log("========================")
console.log("   Personal Dashboard   ")
console.log("========================")
console.log(" ")
console.log(`Name ${personalData.name}`)
console.log(`Age ${personalData.age}`)
console.log(`Country ${personalData.country}`)
console.log(`Developer ${personalData.developer}`)
console.log(" ")
console.log(`Skills :`)
console.log(`${personalData.skill[0]}`)
console.log(`${personalData.skill[1]}`)
console.log(`${personalData.skill[2]}`)
console.log(" ")
console.log(`Account Balance : ${personalData.balance}`)
console.log(" ")
console.log("==== Data Types ====")
console.log(" ")
console.log(`Name : ${typeof personalData.name}`)
console.log(`Age : ${typeof personalData.age}`)
console.log(`Developer : ${typeof personalData.developer}`)
console.log(`Skills : ${typeof personalData.skill}`)
console.log(" ")
console.log("========================")