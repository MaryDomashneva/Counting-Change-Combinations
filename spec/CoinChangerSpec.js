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
    it('returns false if coins sum is not equal to money', function() {
      var money = 4
      var coins = [1,2]
      expect(coinChanger.countChange(money, coins)).toBe(false);
    });

    it('returns true if coins sum is equal to money', function() {
      var money = 4
      var coins = [2,2]
      expect(coinChanger.countChange(money, coins)).toBe(true);
    });
  });
});
