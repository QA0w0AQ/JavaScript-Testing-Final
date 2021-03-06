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

        it("URL should be defined and it's not empty", function(){
            allFeeds.forEach(element => {
                expect(element.url).toBeDefined();
                expect(element.url.length).not.toBe(0);
            });
        })

        it("Name should be defined and it's not empty", function(){
            allFeeds.forEach(element => {
                expect(element.name).toBeDefined();
                expect(element.name.length).not.toBe(0);
            });
        })

    });

    describe('The menu', function(){
        it("The menu element should be hidden by default", function(){
            expect(document.body.classList.contains('menu-hidden')).toBe(true)
        });

        it("The menu should be displayed when I click the menu icon and The menu should be hidden when I click the menu icon again", function(){
            const iconClick = document.querySelector('.menu-icon-link');
            iconClick.click();
            expect(document.body.classList.contains('menu-hidden')).toBe(false)
            iconClick.click();
            expect(document.body.classList.contains('menu-hidden')).toBe(true) 
        })
    });

    describe('Initial Entries', function(){
        
        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });
        it("There is a element whithin the .feed container when the loadFeed function is completed", function(done){
            expect(document.querySelector('.feed .entry').length).not.toBe(0);
            done();
        })
    })

    describe('New Feed Selection', function(){
        
    })
    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
