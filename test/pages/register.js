'use strict';

var RegisterPage = function () {
  browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
};

RegisterPage.prototype  = Object.create({}, {
  uNameText:  {   get: function ()     { return element(by.model('Auth.user.name'));             }},
  uNamePass:  {   get: function ()     { return element(by.model('Auth.user.password'));             }},
  uDesc:  {   get: function ()     { return element(by.model('model[options.key]')).getText(); }},
  uBtnLogin:  {   get: function ()     { return element(by.className('btn btn-danger')); }},
  typeUname: { value: function(uname){return this.uNameText.sendKeys(uname);} },
  typePass: { value: function(pass){return this.uNamePass.sendKeys(pass);} },
  typeDesc: { value: function(desc){return this.uDesc.sendKeys(desc);} },

  
  
  registerUser:   { value: function () {
    this.uBtnLogin.click();
    browser.waitForAngular();
  }}
});

module.exports = RegisterPage;