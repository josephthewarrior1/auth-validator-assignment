const assert = require('assert');
const { validateMail, validatePassword } = require('./main');

describe('validateMail(email)', function() {

  it('valid: simple correct email', function() {
    assert.strictEqual(validateMail('joseph@example.com'), true);
  });

  it('valid: email with subdomain', function() {
    assert.strictEqual(validateMail('gareth@mail.example.com'), true);
  });
  

  it('invalid: missing @ symbol', function() {
    assert.strictEqual(validateMail('vigo.@example.com'), false);
  });

  it('invalid: non-string input', function() {
    assert.strictEqual(validateMail(12345), false);
  });

 
  it('break: intentionally expecting wrong output (intentional fail)', function() {
     assert.strictEqual(validateMail('invalid-email-without-at'), true);
  });
});

describe('validatePassword(password)', function() {

  it('valid: strong password with mixed chars', function() {
    assert.strictEqual(validatePassword('Str0ngPass!'), true);
  });

  it('valid: another strong password', function() {
    assert.strictEqual(validatePassword('Hello123World'), true);
  });

  it('invalid: too short', function() {
    assert.strictEqual(validatePassword('S1aA'), false);
  });

  it('invalid: missing uppercase', function() {
    assert.strictEqual(validatePassword('alllowercase1'), false);
  });

  
   it('break: intentionally expecting wrong output for weak password', function() {
     assert.strictEqual(validatePassword('weak1'), true);
   });
});
