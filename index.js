// Destructuring 

// With Arrays 

let studentArray = ["Claire", "Rebecca", "Robert"]
let student1 = studentArray[0]
let student2 = studentArray[1]
let student3 = studentArray[2]

let [stu1, , stu3] = studentArray

// With Objects

const studentObj = {"name": "Natalie", grade: 12, school: {phase: 4}}

let {name,  school, grade} = studentObj
// Order does NOT matter 
// the naming of our variables must MATCH the keys
// matches with ONLY the top level of keys 

function studentHTML({name, grade, school}){
    return `<div>
        <p>${name} </p>
        <p>${grade} </p>
        <p>${school.phase} </p>
    </div>`
}

let firstname = "Craig"  // document.getElement
let currentSection = 4

let configObj = {
    method: "POST", 
    body: JSON.stringify({
        firstname,
        currentSection
    })
}

// Spread Operator - allow us to make a copy of an object of an array 

const initialState = {
    loggedIn: false, 
    toys: []
}

let state = {...initialState}  // make a copy 

state = {
   ...state , // keeping all the properties the same that we don't want to change
    toys: ["Buzz", "Woody"]
}

state = {
    ...state, 
    loading: true 
}

let newArray = ["Joma", ...studentArray]


// Arrow Functions

// function add2(n) {
//     return n + 2 
// }

const add2 = (n) => {
    return n + 2 
}
// say RETURN with curly brackets 

// const add2 = (n) => n + 2  
// implicit return without curly brackets 

const restoJson = (res) => res.json() 

// .fetch 
// .then(resToJson)

// in arrow functions, the context of `this` is defined when the function is defined


// Class Syntax

function bark(){
    console.log("Woof Woof Woof")
}

class Pet {
    // we ditch the keyword function
    constructor(name, age){ // veery similar to the initialize method in ruby 
        // self.name = name 
        this.name = name 
        // this will always represent the new object being created
        this.age = age
        this.greeting = () => `my name is ${this.name} and my age is ${this.age}`

        document.getElementById('bark').addEventListener('click', this.bark)
    }



    // can only execute on Pet object (instance)
    bark = () => {
        console.log(`Woof Woof! My name is ${this.name}`)
        console.log("in bark function", this)
    }
    // in regular functions, `this` is defined by what the function is called on
}

// new Pet("toby", 12)  // arguments match w/ constructor function