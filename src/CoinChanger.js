'use strict';

function CoinChanger() {
  this.resultArray = [];
}

CoinChanger.prototype.countChange = function(money, coins) {
  var coinsSum = coins.reduce((a, b) => a + b, 0);
  if (coinsSum != money) {
    return false;
  } else {
    return true
  }
}
