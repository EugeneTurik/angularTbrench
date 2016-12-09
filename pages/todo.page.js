var TodoPage = function () {
    var fillText = element(by.model('todoList.todoText'));
    var buttonAdd = element(by.css('[value="add"]'));
    var todoList = element.all(by.repeater('todo in todoList.todos'));
    var todoCheckBox = element(by.model('todo.done'));

    this.get = function () {
        browser.get('http://www.angularjs.org');
    };

    this.submitAdd = function () {
        buttonAdd.click();
    };

    this.fillTextSend = function (value){
        fillText.sendKeys(value);
    };

    this.todoListGet = function (value){
        todoList.get(value);
    };

    this.todoCheckBoxClick = function () {
        todoCheckBox.click();
    };
};
module.exports = TodoPage;

