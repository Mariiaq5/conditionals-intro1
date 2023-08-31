if(1+1 > 5){
    console.log("True fact!");
} else {
    console.log("Lies!");
}
if(4*5 <= 20){
    console.log("True fact!");
} else {
    console.log("Lies!");
}
if(6 && 2 >= 0){
    console.log("True fact!");
} else {
    console.log("Lies!");
}

let likesDogs = true;
if(likesDogs === true){
    console.log("You're a dog person!");
} else {
    console.log("You're a cat person!");
}

let greetings = ["Hello!", "Hola!", "Bonjour!"]
let personObject ={
    firstName: "Addelyn",
    language: "English",
}
console.log(`${greetings[0]} ${personObject.firstName}`);
let personObject1 ={
    firstName: "Agata",
    language: "Spanish",
}
console.log(`${greetings[1]} ${personObject1.firstName}`);
let personObject2 ={
    firstName: "Manuel",
    language: "French",
}
console.log(`${greetings[2]} ${personObject2.firstName}`);

var grades = [0, 21, 35, 38, 46, 49, 52, 55, 63, 74, 82, 87, 91, 94, 99,]
for(let i= 0; i < grades.length; i++){
    if(grades[i] <= 69)
    {
        console.log("You're got an F");
    } else if(grades[i] >= 70 && grades[i] <= 76){
        console.log("You're got a D");
    } else if(grades[i] >= 77 && grades[i] <= 84){
        console.log("You're got a C");
    } else if(grades[i] >= 84 && grades[i] <= 92){
        console.log("You're got a B");
    } else if(grades[i] >= 93 && grades[i] <= 100)
        console.log("You're got an A");
}