module.exports = function() {
    var fs = require('fs');
    console.log("test");
    var replaceTitle =this.replaceTitle =require("../support/replaceTitle.js").replaceTitle;
    console.log(replaceTitle);

    this.Given(/^I have visited page product "([^"]*)"$/, function(title,callback) {
        var titlePro =replaceTitle(title);
        // title = title.replace(/\–/g,"(hyphen)");
        browser.url("http://localhost:3000/details/" + titlePro);
        setTimeout(callback, 10000);
    });


    this.Then(/^I see image fo product$/, function() {
        var image = browser.elements("img#hoverZoom").getAttribute("src");
        console.log(image);
        //expect(image).toContain(image);
    });

    this.When(/^I can check image url$/, function(callback) {
        var imageurl = browser.elements("img#hoverZoom").getAttribute("src");
        browser.url(imageurl);
        setTimeout(callback, 10000);
    });

    this.Then(/^I can see image found or not$/, function() {
        var title = browser.elements("title").getAttribute("textContent");
        console.log("title==" + title);
        if (title == "404 Not Found") {
            var textnotfound = browser.elements("h1").getAttribute("textContent");
            var imagenotfound = browser.elements("body > p").getAttribute("textContent");
            console.log("tile" + imagenotfound);

            if (textnotfound == "Not Found") {
                var datamatch = imagenotfound.match("(.)(\/upload.*?\.jpg|\/upload.*?\.png)(.)");
                console.log("image not found ");
                var data = datamatch[2];
                fs.writeFile("imagenotfound.txt", data, function(err) {
                    if (err) throw err;
                    console.log(err);
                });
            } else {
                console.log("found image");
            }
        } else {
            console.log("product has image");
        }


    });
};
