'use strict';

var RegisterPage = require('../pages/register.js')

describe('register user', function(){
    
    var reg;

    beforeEach(function(){
        //browser.ignoreSynchronization = true;
        reg = new RegisterPage();
    });

    it('should register user' , function(){
        reg.typeUname('angular');
        reg.typePass('password');
        reg.typeDesc('angularguy');

        reg.registerUser();
        expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/registeration/#/');
    });



    it('should not enter usname and try register' , function(){
        //reg.typeUname('angular');
        reg.typePass('password');
        reg.typeDesc('angularguy');
        
    });

    it('should not enter pass and try register' , function(){
        reg.typeUname('angular');
        //reg.typePass('password');
        reg.typeDesc('angularguy');
        
    });


    it('should not enter desc and try register' , function(){
        reg.typeUname('angular');
        reg.typePass('password');
        //reg.typeDesc('angularguy');
        
    });
});
