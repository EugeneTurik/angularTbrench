describe('angularjs homepage project list', function() {

    it('add project', function() {
        browser.get('https://angularjs.org');
        var projectList = element.all(by.repeater('project in projectList.projects'));
        element(by.css('.well .icon-plus-sign')).click();
        element(by.model('editProject.project.name')).sendKeys('protractor test');
        element(by.model('editProject.project.site')).sendKeys('https://angularjs.org/new');
        element(by.model('editProject.project.description')).sendKeys('angularjs1');
        element(by.css('.btn btn-primary')).click();
        var newProjectList = element.all(by.repeater('project in projectList.projects'));
        var fullLenght = newProjectList.count();
        expect(projectList.count()+1).toEqual(fullLenght);
        expect(newProjectList.get(fullLenght).getText()).toEqual('protractor test');
    });

    it('elements project', function() {
        browser.get('https://angularjs.org');
        var projectList = element.all(by.repeater('project in projectList.projects'));
             expect(projectList.count()).toEqual(0);
    });

    it('delete project', function() {
        browser.get('https://angularjs.org');
        element(by.css('icon-pencil')).click();
        element(by.css('btn btn-danger')).click();
        var projectList = element.all(by.repeater('project in projectList.projects'));
        expect(projectList.count()).toEqual(11);
    });

    it('search project', function() {
        browser.get('https://angularjs.org');
        element(by.model('projectList.search')).sendKeys('angular 2');
        var projectList = element.all(by.repeater('project in projectList.projects'));
        expect(projectList.count()).toEqual(1);
        expect(projectList.get(1).getText()).toEqual('One framework. Mobile and desktop.')
    });

    it('correct project', function() {
        browser.get('https://angularjs.org');
        element(by.css('editProject.project.name')).click();
        element(by.model('editProject.project.description')).sendKeys('Mobile and desktop.');
        element(by.css('btn btn-primary')).click();
        var projectList = element.all(by.repeater('project in projectList.projects'));
        expect(projectList.get(1).getText()).toEqual('Mobile and desktop.')
    });
});
