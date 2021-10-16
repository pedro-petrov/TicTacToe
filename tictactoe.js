//var topRow = ["X", "X", "X"];
//var midRow = ["X", "X", "X"];
//var botRow = ["X", "X", "X"];

var playerName = prompt("Olá! Como te chamas?")
var userChoice = prompt("Olá " + playerName + "! Escolhe entre pedra, papel ou tesoura.");
//if (userChoice !== "pedra" || userChoice !== "papel" || userChoice !== "tesoura") {
    //alert("Por favor escolher entre pedra, papel ou tesoura!")
    //break;
//}
var cpuChoice = ["pedra", "papel", "tesoura"];
var ranNum = Math.floor((Math.random() * 2) + 1);
var cpuResult = cpuChoice[ranNum];
var finalResult;
if (cpuResult === userChoice) {
    //alert("Empataram!");
    finalResult = "Empataram!";
    } else if (userChoice === "pedra" && cpuResult === "papel") {
        //alert("Ganhou o computador");
        finalResult = "Ganhou o computador!";
    } else if (userChoice === "papel" && cpuResult === "tesoura") {
        //alert("Ganhou o computador");
        finalResult = "Ganhou o computador!";
    } else if (userChoice === "tesoura" && cpuResult === "pedra") {
        //alert("Ganhou o computador");
        finalResult = "Ganhou o computador!";
    } else {
        //alert("Parabéns ganhaste!")
        finalResult = "Parabéns ganhaste!";
    }
alert("Tu escolheste " + userChoice + " e o computador escolheu " + cpuResult + "! " + finalResult);