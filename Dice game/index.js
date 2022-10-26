var randomNumber1=Math.floor(Math.random()*6)+1; //number between 1-6

var randomDiceNumber1="dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDiceNumber1);

//For second number
var randomNumber2=Math.floor(Math.random()*6)+1; //number between 1-6

var randomDiceNumber2="dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceNumber2);


if(randomDiceNumber1>randomDiceNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if(randomDiceNumber1<randomDiceNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="Draw!!";
}