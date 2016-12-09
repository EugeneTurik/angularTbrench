var NamePage = function() {
   var name = element(by.model('yourName'));
   var greeting =element(by.binding('yourName'));

   this.get = function() {
       browser.get('http://www.angularjs.org');
   };
   this.fillName = function(value){
       name.sendKeys(value);
   };
   this.getName = function(){
       greeting.getText();
   };
   this.clearName = function(){
       name.clear();
   };

};

module.exports = NamePage;