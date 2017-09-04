var util =require('util');

describe ('Adjunct List', function (){
    var ptor;

    beforeEach(function() {
        browser.ignoreSynchronization=true;
        browser.get('https://angularjs.org/');
    });

    it('should do something', function(){
        element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/input')).sendKeys('Me');
        
        expect(browser.getCurrentUrl()).toContain('angularjs.org');
    }, 10000);

    it('should do something', function(){
        element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/input')).sendKeys('Me');
        
        expect(browser.getCurrentUrl()).toContain('angularjs.org');
    }, 10000);

    it('should do something', function(){
        element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/input')).sendKeys('Me');
        
        expect(browser.getCurrentUrl()).toContain('angularjs.org');
    }, 10000);
    });
