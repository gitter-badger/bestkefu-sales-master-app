(function () {
  'use strict';

  describe('Dashboard', function () {

    describe('main', function () {

      beforeEach(function () {
        browser.get('http://localhost:3000/#/');
      });

      it('should view dashboard main page', function () {

        browser.getTitle().then(function(title) {
          expect(title).toBe('Dashboard');
        })

        element(by.css('a[href="#/goods"]')).getText().then(function(text) {
          expect(text).toBe('Goto Goods');
        });

        element(by.css('a[href="#/order"]')).getText().then(function(text) {
          expect(text).toBe('Goto Order');
        });
      });
    });
  });

})();
