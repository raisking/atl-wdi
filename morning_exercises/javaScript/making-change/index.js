// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var makeChange = function(price, payment) {
  price *= 100;
  payment *= 100;
  // Given price and payment amount.
  // Calculate the change
  let change = payment - price;
  if (change <= 0){
    // If price is more than payment return [0,0,0,0]
    return [0,0,0,0];
  } else {
    // Return an array like [Q, D, N, P]
    // Calculate Quarters
    const quarters = Math.floor(change / 25);
    change = change % 25;
    // Calculate Dimes
    const dimes = Math.floor(change / 10);
    change = change % 10;
    // Calculate Nickels
    const nickels = Math.floor(change / 5);
    change = change % 5;
    // Calculate Pennies
    const pennies = Math.floor(change);

    return [quarters, dimes, nickels, pennies];
  
  }
};

//45 = 1 Q, 2 D
makeChange(5.55, 6);

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
