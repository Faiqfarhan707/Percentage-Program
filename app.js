var mathmarks=  +prompt("mathematics marks obtained" )
var engmarks =  +prompt("english  marks obtained" )
var chemarks =  +prompt("chemistry  marks obtained" )
var phymarks =  +prompt("Physics marks obtained" )
var urdumark =  +prompt("urdu marks obtained" )

var totalmarks = 200
var obtain =  mathmarks +engmarks+chemarks+phymarks+urdumark
var persantage = obtain/totalmarks * 100

console.log( "you got" ,persantage + " % " )
// console.log(obtain)

// if(total > 0 && obtained >= 0) {
//     var percentage = (obtained / total) * 100;
//     document.getElementById('result').innerText = "Percentage: " + percentage.toFixed(2) + "%";
// } else {
//     document.getElementById('result').innerText = "Please enter valid numbers.";
// }