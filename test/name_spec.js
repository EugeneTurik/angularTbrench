var NamePage = require ('/pages/name.page.js');

describe('angularjs homepage Name', function() {

    var namePage = new NamePage();

    beforeEach(function() {
       namePage.get();
    });

    it('should greet the named Julie', function() {
       namePage.fillName('Julie');
        expect(namePage.getName()).toEqual('Hello Julie!');
    });

    it('should greet the named !@#$%^&*()', function() {
        namePage.fillName('!@#$%^&*()');
        expect(namePage.getName()).toEqual('Hello !@#$%^&*()!');
    });

    it('should greet the named Julie123', function() {
        namePage.fillName('Julie123');
        expect(namePage.getName()).toEqual('Hello Julie123!');
    });

    it('should greet the named Julie+100=3', function() {
        namePage.fillName('Julie+100=3');
        expect(namePage.getName()).toEqual('Hello Julie+100=3');
    });

    it('clear the name Jon', function(){
        namePage.fillName('Jon');
        namePage.clearName();
        expect(namePage.getName()).toEqual();
    });

  });