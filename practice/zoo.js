// this is a practice file that automates a simple js site 'http://thetestroom.com/jswebapp/'

var zooSite = 'http://thetestroom.com/jswebapp/';
var pageTitle = 'WELCOME TO THE ZOO ADOPTION CENTER';
var name = 'Chris Manning';
var menuOptions = [ "Please select from the drop down below",
		"George the Turtle", "Simba the Lion", "Nemo the Fish" ];

/**
 * locators
 */
var pg1Title = element(by.xpath("//*[contains(text(), 'WELCOME TO THE ZOO')]"));
var nameBox = element(by.model('person.name'));
var nameDisplay = element(by.binding('person.name'));
var contButton = element(by.xpath("//button[@id='continue_button']"));
var pg2Title = element(by.xpath("//*[contains(text(), 'Select you Animal')]"));
var animalSelect = element(by.xpath("//select[@ng-model='animal']"));
var animalOptions = element.all(by.css(".ng-pristine option"));

function textCheck(element, string) {
	expect(element.getText()).toEqual(string);
}

function chkElementPresent(element) {
	expect(element.isPresent()).toBe(true);
}

function isLoaded(element1, element2) {
	chkElementPresent(element1);
	chkElementPresent(element2);
}

/**
 * used to get the number of items available in a select dropdown menu
 * 
 * @param element :
 *            variable of element.all
 * @param num :
 *            int of expected number of items
 */
function getNumOfDropdownOptions(element, num) {
	element.then(function(items) {
		expect(items.length).toBe(num);
	});
}

/**
 * used to get a specific option values text
 * 
 * @param element :
 *            variable of element.all
 * @param num :
 *            interger let m
 * @param expectedText
 */
function getOptionText(element, num, expectedText) {
	element.then(function(items) {
		expect(items[num].getText()).toBe(expectedText);
	});
}

function assertOptionText(element) {
	for (count = 0; count < menuOptions.length; count++) {
		getOptionText(element, count, menuOptions[count]);
	}

}

/**
 * used to select an element in a select dropdown menu
 * 
 * @param element :
 *            of the select dropdown
 * @param optionNum :
 *            string number representing the options value you wish to select
 */
function useDropdown(element, optionNum) {
	element.$("[value='" + optionNum + "']").click();
}

describe('zoo practice test', function() {

	beforeEach(function() {
		browser.get(zooSite);
	});

	it('main page load', function() {
		isLoaded(pg1Title, nameBox);
		textCheck(pg1Title, pageTitle);
	});

	it('dynamic text displays', function() {
		isLoaded(pg1Title, nameBox);
		nameBox.sendKeys(name);
		textCheck(nameDisplay, name);
	});

	it('continue button takes you to page 2', function() {
		isLoaded(pg1Title, nameBox);
		contButton.click();
		isLoaded(pg2Title, animalSelect);
	});

	it('checks the animal pulldown on page 2', function() {
		isLoaded(pg1Title, nameBox);
		contButton.click();
		isLoaded(pg2Title, animalSelect);
		getNumOfDropdownOptions(animalOptions, 4);
		assertOptionText(animalOptions);
		useDropdown(animalSelect, "3");
	});
});