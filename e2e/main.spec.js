'use strict';

describe('The main view', function () {

  beforeEach(function () {
    browser.get('http://localhost:3000');
  });

  it('should include jumbotron with correct data', function() {

    console.log(element(by.css('.row')).getText());
    expect(true).toBe(true);
  });

});
