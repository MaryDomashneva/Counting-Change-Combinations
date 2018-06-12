'use strict';

function CoinChanger() {
  this.resultArray = [];
}

CoinChanger.prototype.countChange = function(money, coins) {
  if(money < 0 || coins.length === 0) {
    return this.resultArray
  } else if(money === 0) {
    this.resultArray.push(1)
  } else {
    this.countChange(money - coins[0], coins)
    this.countChange(money, coins.slice(1))
    return this.resultArray
  }
}
