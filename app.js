var mathmarks=  +prompt("mathematics marks obtained" )
var engmarks =  +prompt("english  marks obtained" )
var chemarks =  +prompt("chemistry  marks obtained" )
var phymarks =  +prompt("Physics marks obtained" )
var urdumark =  +prompt("urdu marks obtained" )

var totalmarks = 200
var obtain =  mathmarks +engmarks+chemarks+phymarks+urdumark
var persantage = obtain/totalmarks * 100

console.log( "you got" ,persantage + " % " )