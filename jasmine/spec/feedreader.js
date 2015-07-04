/* feedreader.js
*
* This is the spec file that Jasmine will read. It contains
* tests that will be run against the feed reader application.
*/

/* We're placing all of our tests within the $() function,
* since some of these tests may require DOM elements. We want
* to ensure they don't run until the DOM is ready.
*/
$(function() {

	/* This suite is about the RSS feeds definition
	* and the allFeeds variable in the application.
	*/
	describe('RSS Feeds', function() {
		/* This tests to make sure that the allFeeds variable
		*  has been defined and that the array is not empty.
		*/
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

	});

	/* This suite is about each feed in the list of RSS feeds
	*/
	describe('Each feed in the list of RSS feeds', function() {

		/* These tests loop through each feed in the allFeeds object
		* and ensure it has defined and non-empty name and url.
		*
		* ADDITIONAL TESTS:
		* 1. Tests to make sure that url and name is of type string
		* 2. Tests for URL validity using regular expression
		* Below is a modified version seen in http://regexlib.com/Search.aspx?k=url&AspxAutoDetectCookieSupport=1
		* It catches many valid possibilities. localhost with port ID or IP addresses are excluded
		*/
		var validUrl = /^((ht|f)tps?:\/\/)?[a-z0-9-\.]+\.[a-z]{2,}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/;

		it('has a defined valid URL', function() {
			allFeeds.forEach(function(item) {
				expect(item.url).toBeDefined();
				expect(typeof item.url).toEqual('string');
				expect(item.url).not.toBe('');
				 // match URL against the regular expression defined in validUrl
				expect(item.url).toMatch(validUrl);
			});
		});

		/* Test loops through each feed in the allFeeds object and ensures it has a name defined
		* and that the name is not empty.
		*/
		it('has a defined non-empty name', function() {
			allFeeds.forEach(function(item) {
				expect(item.name).toBeDefined();
				expect(typeof item.name).toEqual('string');
				expect(item.name).not.toBe('');
			});
		});

	});


	/* This test suite is about the menu and the menu icon's functionality */

	describe('The menu', function() {
		// some jQuery analogues
		var body = $('body');
		var icon = $('.menu-icon-link');

		/* This test ensures that the menu element is hidden by default.
		* It does a simple check that an element contains the menu-hidden class.
		*/
		it('is hidden by default', function() {
			expect($('.menu-hidden').length).not.toBe(0); // checks if class menu-hidden is in index.html
			expect(body.hasClass('menu-hidden')).toBe(true); //checks if body tag has the class
		});

		/* Test ensures the menu toggles visibility when the menu icon is clicked.
		* This test should have two expectations: does the menu display when
		* clicked and does it hide when clicked again. This test simulates clicking
		* by invoking trigger('click') twice.
		*/
		it('toggles visibility when clicked', function() {
			icon.trigger('click');
			expect(body.hasClass('menu-hidden')).toBe(false);
			icon.trigger('click');
			expect(body.hasClass('menu-hidden')).toBe(true);
		});

	});

	/* This test suite named "Initial Entries" is about the initial feed loaded on the page */
	describe('Initial Entries', function() {
		var feedId = 0; // Use numbers 0 - 3 to pass, anything else to see Jasmine errors

		/* This test ensures that when the loadFeed function is called and completes its work,
		* there is at least a single .entry element within the .feed container.
		* loadFeed() is asynchronous so this test wil require
		* the use of Jasmine's beforeEach and asynchronous done() function.
		*/
		beforeEach(function(done) {
			loadFeed(feedId,done);
		});

		it('should have at least one entry element', function(done) {
			var feedItems = $('.feed').find('.entry');
			expect(feedItems.length).toBeGreaterThan(0);
			done();
		});
	});

	/* This test suite named "New Feed Selection" is about loading a different feed when selected */

	describe('New Feed Selection', function() {
		var initialFeedId = 0;
		var compareFeedId = 2;
		var compareContent, initialContent;

		/* This test ensures that when a new feed is loaded
		* by the loadFeed function that the content actually changes.
		* Again loadFeed() is asynchronous so callback done() is used.
		*/
		beforeEach(function(done) {
			loadFeed(compareFeedId, function() {
				// Grab the text node within the element with class ".entry" and get rid of all white spaces
				// This content will be compared to another content
				compareContent = $('.feed').find('.entry').text().replace(/\s/g, "");
						done();
			});
		});
			// repeat the process
		beforeEach(function(done) {
			loadFeed(initialFeedId, function() {
				initialContent = $('.feed').find('.entry').text().replace(/\s/g, "");
					done();
			});
		});
		// When the 2 loadFeed calls are finished then compare their content
		it('changes when new feed is selected and if new feed has content', function(done) {
			expect(initialContent).not.toBe(compareContent);
			done();
		});

	});

}());
