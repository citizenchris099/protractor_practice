// this is a practice file that automates a simple js site 'http://thetestroom.com/jswebapp/'

var zooSite = 'http://thetestroom.com/jswebapp/';
var pageTitle = 'WELCOME TO THE ZOO ADOPTION CENTER';
var name = 'Chris Manning';
var pg1Title = element(by.xpath("//*[contains(text(), 'WELCOME TO THE ZOO')]"));
var nameBox = element(by.model('person.name'));
var nameDisplay = element(by.binding('person.name'));
var contButton = element(by.xpath("//button[@id='continue_button']"));
var pg2Title = element(by.xpath("//*[contains(text(), 'Select you Animal')]"));
var animalSelect = element(by.xpath("//select[@ng-model='animal']"));

function textCheck(element, string) {
	expect(element.getText()).toEqual(string);
}

function chkElementPresent(element){
	expect(element.isPresent()).toBe(true);
}

function isLoaded(element1, element2){
	chkElementPresent(element1);
	chkElementPresent(element2);
}

function useDropdown(element, optionNum){
	element.$("[value='"+optionNum+"']").click();
}

describe('zoo practice test', function() {
	it('basic test to see if text displays', function() {
		browser.get(zooSite);
		isLoaded(pg1Title, nameBox);
		textCheck(pg1Title, pageTitle);
		nameBox.sendKeys(name);
		textCheck(nameDisplay, name);
		contButton.click();
		isLoaded(pg2Title, animalSelect);
		useDropdown(animalSelect, "3");
	});
});