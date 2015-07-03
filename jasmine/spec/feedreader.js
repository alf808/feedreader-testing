/* feedreader.js
*
* This is the spec file that Jasmine will read and contains
* all of the tests that will be run against your application.
*/

/* We're placing all of our tests within the $() function,
* since some of these tests may require DOM elements. We want
* to ensure they don't run until the DOM is ready.
*/
$(function() {


	/* This is our first test suite - a test suite just contains
	* a related set of tests. This suite is all about the RSS
	* feeds definitions, the allFeeds variable in our application.
	*/
	describe('RSS Feeds', function() {
		/* This is our first test - it tests to make sure that the
		* allFeeds variable has been defined and that it is not
		* empty. Experiment with this before you get started on
		* the rest of this project. What happens when you change
		* allFeeds in app.js to be an empty array and refresh the
		* page?
		*/

		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

	});

	// Suite for each item in an RSS feed.
	describe('Each feed item in the RSS feeds', function() {

		/* TODO: Write a test that loops through each feed
		* in the allFeeds object and ensures it has a URL defined
		* and that the URL is not empty.
		*/
		// regex for URL validity. Absolutely not perfect. It catches most possibilities.
		// modified a version seen in http://regexlib.com/Search.aspx?k=url&AspxAutoDetectCookieSupport=1
		var validUrl = /^((ht|f)tps?:\/\/)?[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s<>\#%"\,\{\}\\|\\\^\[\]`]+)?$/;


		it('has a defined valid URL', function() {
			// do a foreach here
			allFeeds.forEach(function(item) {
				expect(item.url).toBeDefined(); // key url exists
				expect(typeof item.url).toEqual('string'); // check to make sure that URL is a string
				expect(item.url).not.toBe(''); // i.e. not an empty string
				expect(item.url).toMatch(validUrl); // match the regex for URL validity
			});
		});


		/* TODO: Write a test that loops through each feed
		* in the allFeeds object and ensures it has a name defined
		* and that the name is not empty.
		*/
		it('has a defined non-empty name', function() {
			allFeeds.forEach(function(item) {
				expect(item.name).toBeDefined(); // key name exists
				expect(typeof item.name).toEqual('string'); // check to make sure that name is a string
				expect(item.name).not.toBe(''); // i.e. not an empty string
			});
		});

	});

	/* TODO: Write a new test suite named "The menu" */

	describe('The menu', function() {
			// general jquery analogues
			var body = $('body');
			var menu = $('.menu');
			var hidden = $('.hidden');
			var icon = $('.menu-icon-link');
			var menuhidden = body.hasClass('menu-hidden');
			// beforeEach(function() {

	  // });
		/* TODO: Write a test that ensures the menu element is
		* hidden by default. You'll have to analyze the HTML and
		* the CSS to determine how we're performing the
		* hiding/showing of the menu element.
		*/
		it('is hidden by default', function() {
//			expect(body).toBeHidden();
			expect(body.hasClass('menu-hidden')).toBe(true); //checks if body has the class
//			expect($('.menu.hidden').css("transform", "translate3d(-12em, 0, 0)")).toBeTruthy();
//			expect(menu.css("transform")).toBe("translate3d(-12em, 0, 0)");
//			expect(menu).toBeHidden(); // checks if menu on load is hidden or consumes no space
//			expect(allFeeds.length).not.toBe(0);
		});

		/* TODO: Write a test that ensures the menu changes
		* visibility when the menu icon is clicked. This test
		* should have two expectations: does the menu display when
		* clicked and does it hide when clicked again.
		*/

		it('toggles visibility when clicked', function() {
			icon.trigger('click');
			expect(body.hasClass('menu-hidden')).toBe(false);
			icon.trigger('click');
			expect(body.hasClass('menu-hidden')).toBe(true);
		});


	});

	/* TODO: Write a new test suite named "Initial Entries" */
	describe('Initial Entries', function() {

		// Loads the initial feed that the app has defined (index of 0).
		beforeEach(function(done) {
			loadFeed(0,done);
		});

		/* TODO: Write a test that ensures when the loadFeed
		* function is called and completes its work, there is at least
		* a single .entry element within the .feed container.
		* Remember, loadFeed() is asynchronous so this test wil require
		* the use of Jasmine's beforeEach and asynchronous done() function.
		*/
		xit('should have at least one entry element', function() {

		});
	});

	/* TODO: Write a new test suite named "New Feed Selection" */

	describe('New Feed Selection', function() {

		/* TODO: Write a test that ensures when a new feed is loaded
		* by the loadFeed function that the content actually changes.
		* Remember, loadFeed() is asynchronous.
		*/
		xit('changes when new feed is selected', function() {
		});
	});




}());
