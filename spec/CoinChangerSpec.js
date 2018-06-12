'use strict';

describe('CoinChanger', function() {
  var coinChanger;

  beforeEach(function() {
    coinChanger = new CoinChanger();
  });

  it('has empty result Array by default', function() {
    expect(coinChanger.resultArray).toEqual([]);
  })

  describe('#countChange', function() {
    it('returns number of ways to give change', function() {
      var money = 10
      var coins = [5, 2, 3]
      coinChanger.countChange(money, coins)
      expect(coinChanger.resultArray).toEqual([1, 1, 1, 1]);
    });

    it('returns empty array if no way to give change', function() {
      var money = 11
      var coins = [5, 7]
      coinChanger.countChange(money, coins)
      expect(coinChanger.resultArray).toEqual([]);
    });
  });
});
