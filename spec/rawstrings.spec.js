/* global raw strings, describe, it, expect, should */

describe('printLetter1()', function () {
  'use strict';

  it('exists', function () {
    expect(printLetter1).to.be.a('function');

  });

  it('does something', function () {
    expect(typeof printLetter1()).to.equal('string');
  });

  it('does something else', function () {
    expect(printLetter1()).to.equal('n');
  });

  // Add more assertions here
});

describe('bridgeString1()', function () {
  'use strict';

  it('exists', function() {
    expect(bridgeString1).to.be.a('function');

  });

  it('does something', function () {
    expect(typeof bridgeString1()).to.equal('string');

  });

  it('does something else', function() {
    expect(bridgeString1()).to.equal('Javascript is so much fun. I wish I could code  in javascript all day, every day!')

  });

});

describe('characterEscapes()', function() {
  'use strict';

  it('exists', function () {
    expect(characterEscapes).to.be.a('function');

  });

  it('does something', function () {
    expect(typeof characterEscapes()).to.equal('string');

  });

  it('does something else', function () {
    expect(characterEscapes()).to.equal('I can\'t think of it right now. I don\'t have any idea.');

  });

})