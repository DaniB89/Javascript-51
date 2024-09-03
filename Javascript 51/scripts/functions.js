function practice(){
    let num1=prompt("Enter a Number");
    let num2=prompt("Enter a Number");
    if(num1>num2){
        console.log("num1 is greater than num2");
    }else if(num2>num1){
        console.log("num2 is greater that num1");
    }else{
        console.log("num2 is equal to num2");
    }

}

function getDriverLicense(){
    // 1. Prompt
    let age=prompt("Enter Your Age");
    if(age>18){
        document.write("Congratulations! You can get your driver's license.")
    }else if(agege<18){
        document.write("Sorry, you are too young to get a driver's license.")
    }
}

function miniGame(){
    console.log("Mini Game");
    // 1. Generate a random number between 1 and 10 (you can use Math.random() and Math.floor()).
    let randomNum = Math.floor(Math.random()*10)+1;
    console.log(randomNum);
    // 2. Ask the user to guess the number. (prompt)
    let user= Number(prompt("Guess the Number"));
    // 3. Use an if-else statement to check if the user's guess is correct.
    if(user==randomNum){
    // 4. If the guess is correct, print on the HTML "Congratulations! You guessed the number."
        document.getElementsByID("results").innerHTML="Congratulations! You guessed the number.";
    // 5. If the guess is incorrect, print on the HTML "Sorry, that's not correct. The number was [generated number]".
    }else if(user != randomNum){
        document.getElementById("results").innerHTML="Sorry, that is not correct. The number was" + " " + randomNum;
    }
}

//Database Simulation
let dbEmail= "stacy.adams@sdgku.edu"
let dbPass="Test1234"

function login(){
    let email= prompt("Enter Your Email:");
    let password=prompt("Enter Your Password:");

    if(email==dbEmail && password==dbPass){
        document.getElementById("results").innerHTML="Welcome to the System";
    }else{
        document.getElementById("results").innerHTML=`
        <p class = "alert-error">"Invalid Credentials">
    }
}

let number=0
function increaseNumber(){
    //number=number+1;
    document.getElementById("number").innerHTML=++number;
}