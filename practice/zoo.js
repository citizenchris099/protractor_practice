// this is a practice file that automates a simple js site 'http://thetestroom.com/jswebapp/'

var zooSite = 'http://thetestroom.com/jswebapp/';
var pgTitle = element(by.xpath("//*[contains(text(), 'WELCOME TO THE ZOO')]"));
var nameBox = element(by.model('person.name'));
var nameDisplay = element(by.binding('person.name'));

describe('zoo practice test', function() {
	it('basic test to see if text displays',
			function() {
				browser.get(zooSite);
				expect(pgTitle.getText()).toEqual(
						'WELCOME TO THE ZOO ADOPTION CENTER');
				nameBox.sendKeys('Chris Manning');
				expect(nameDisplay.getText()).toEqual('Chris Manning');
			});
});