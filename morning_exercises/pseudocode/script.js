//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  let smallBarrel = 60;
  let largeBarrel = (total - (smallBarrel * 2))/large;
  return largeBarrel;
};
barrels(2,5,825);
//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  //Earth is rotating at 1000 mph
  //$3 per gallon and ship gets 12 miles per gallon
  const circumference = 24901;
  let gallonUsed =  circumference / milesPerGallon;
  let totalCost = gallonUsed * fuelPrice;
  return totalCost;
};
shipFuelCost(3, 12);

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
  //your code here
  b = b /100; //convert to percentage
  d = d /100; //convert to percentage
  let costcoJuice = b * a;
  let kirklandJuice = d * c;
  let total = costcoJuice + kirklandJuice;
  let totalAmountJuice = a + c;
  let totalPercent = total / totalAmountJuice;
  return totalPercent;
};
calcFruitJuice(3, 20, 2, 55);

//DO NOT EDIT BELOW THIS LINE//
module.exports = {  
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
