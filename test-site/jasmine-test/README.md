# Feed Reader Testing

## Purpose of this project

1. Learn how to use Jasmine Behavior-Driven Javascript library to write automatic test script.
2. Practise "test-driven developement" and analyze multiple aspects of an application.
3. Write Good Tests to quickly analyze whether new code breaks any existing features



## How to use the application
1. Download the project from Github: https://github.com/hermanwu/frontend-nanodegree-feedreader
2. Open index.html in the browser. 7 Jasmine testing cases will run automatically and display the testing result.
3. If any errors occur, it will also display the tracing information.
4. Jasmine spec file can be found in *./jasmine/spec/feedreader.js*.

## tests 
1. Test that ensures allFeeds variable is not empty .
2. Test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
3. Test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
4. Test that ensures the menu element is hidden by default. 
5. Test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
6. Test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
7. Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.