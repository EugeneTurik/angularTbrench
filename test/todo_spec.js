var TodoPage = require ('/pages/todo.page.js');

describe('angularjs homepage todo list', function() {

    var todoPage = new TodoPage;

    beforeEach(function() {
        todoPage.get();
    });

    it('should add a todo', function() {
        todoPage.fillTextSend('first protractor test');
        todoPage.submitAdd;
        expect(todoPage.todoListGet(2).getText()).toEqual('first protractor test');
    });

    it('should add a todo', function() {
        expect(todoPage.todoListGet(1).getText()).toEqual('build an angular app');
    });

    it('should add a todo', function() {
        todoPage.fillTextSend('first protractor test');
        todoPage.submitAdd;
        expect(todoPage.todoList.count()).toEqual(3);
    });

    it('get element by todo', function() {
        todoPage.todoCheckBoxClick;
        expect(todoPage.todoListGet(1).getText()).toEqual('learn angular');
    });

});
