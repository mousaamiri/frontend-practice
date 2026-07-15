/* var */
for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000);
}
/* let  */
console.log("let : -------------- ")
for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i)
    }, 1000);
}
/* function */
console.log("-------------- ")
const user = {
    name: "mousa",
    sayHello: function () {
        console.log(`Hello , I'm ${this.name}`)
    },
    sayHello2: function () {
        setTimeout(function () {
            console.log(this.name);
        }, 1000);
    }
}
user.sayHello()
user.sayHello2()
/* arrow function */
console.log("-------------- ")
const user2 = {
    name: "Mohammad",
    sayHello: () => {
        console.log(`Hello, I'm ${this.name}`)
    },
    sayHello2: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
}
user2.sayHello()
user2.sayHello2()
/* Destructuring */
console.log("-------------- ")
const user3 = {
    name: "Mousa",
    age: 27,
    city: "Dishmook"
}
const { name: userName, age } = user3
console.log(`user name is : ${userName}`)
console.log(`user age is : ${age}`)
/* -------------- */
console.log("-------------- ")
const colors = [
    "red",
    "blue",
    "green"
]
const [a, , c] = colors
console.log(`color a is : ${a}`)
console.log(`color c is : ${c}`)
/* -------------- */
console.log("-------------- ")
const printUser = ({ name, age }) => {
    console.log(name)
    console.log(age)
}
printUser({ name: "Mousa", age: 26 })
/* Spread / rest */
console.log("----- Spread / rest ------- ")
const numbers1 = [1, 2, 3]
const numbers2 = [4, 5, 6]
const allNumbers = [...numbers1, ...numbers2]
console.log(allNumbers)

/* -------------- */
console.log("----- copy ------- ")
const arr = [1, 2, 3]
const copy = [...arr]
console.log(copy)

/* -------------- */
console.log("----- copy - change ------- ")
const user4 = { name: "mousa", age: 27 }
const updateUser = { ...user4, age: 26 }
console.log(updateUser)

/* -------------- */
console.log("----- rest ------- ")
function sum(...nums) {
    return nums.reduce((total, num) => {
        return total + num;
    }, 0)
}
console.log(sum(1, 2, 3, 4, 5, 6))
/* Template Literal */
console.log("-------- Template Literal ------------")
const user5 = {
    name: "Mousa",
    job: "Backedn Developer",
    skills: [".NET", "C#", "JavaScript"]
}
const card = `
------------------
👤 Name : ${user5.name}

💼 Job : ${user5.job}

🛠 Skills : (${user5.skills.length})
${user5.skills}
------------------
`
console.log(card)
