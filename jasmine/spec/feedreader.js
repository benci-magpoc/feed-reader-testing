$(function() {

  describe('RSS Feeds', function() {

    //checks if feeds are defined

    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    //checks if feed urls are defined

    it('each has url', function() {
      for(let feed of allFeeds) {
        expect(feed.url).toBeDefined();
        expect(feed.url.constructor).toBe(String);
        expect(feed.url.length).not.toBe(0);
      }
     });

     //checks if feed has a name defined
     it('each has name', function() {
       for(let feed of allFeeds) {
         expect(feed.name).toBeDefined();
         expect(feed.name.constructor).toBe(String);
         expect(feed.name.length).not.toBe(0);
       }
     });

  }); //end RSS Feeds test suite

  //The menu test suite

  describe('The Menu', function() {

    //checks if menu is hidden by default

    it('hidden by default', function() {
      let menuIsHidden = document.body.classList.contains('menu-hidden');
      expect(menuIsHidden).toBe(true);
    });

    //checks if menu is toggling

    it('does menu toggles when clicked', function() {

      let menuClick = document.querySelector('a.menu-icon-link');
      menuClick.click();
      expect(document.body.classList.contains('menu-hidden')).toBe(false);
      menuClick.click();
      expect(document.body.classList.contains('menu-hidden')).toBe(true);
      });

  }); //end Initial Entries test suite

  //Initial Entries test suite

  describe('Initial Entries', function() {

    //setting up beforeEach

    beforeEach(function(done) {
      loadFeed(1, done);
    });

    //checks if feed has entries

    it('has entries in feed', function() {
      expect($('.feed .entry').length).toBeGreaterThan(0);
    });

  }); //end Initial Entries test suite

  //New Feed Selection test suite

  describe('New Feed Selection', function() {

    //first and second variables to compare feeds

    let first, second;

    //setting up beforeEach

    beforeEach(function(done) {
      loadFeed(3, function() {
        first = document.querySelector('div.feed').innerHTML;
          loadFeed(2, function() {
            second = document.querySelector('div.feed').innerHTML;
            done();
          });
      });
    });

    //checks if feeds load correctly

    it('feed loads fine', function() {
      expect(first).not.toBe(second);
    });

  }); //end New Feed Selection test suite

}());
