module.exports = function() {
    var fs = require('fs');

    this.Given(/^I have visited page product "([^"]*)"$/, function(title) {
        title = title.replace(/\s/g, "-");
        title = title.replace(/\%/g, "(percentag)");
        title = title.replace(/\+/g, "(plush)");
        title = title.replace(/\ô/g, "(ocir)");
        title = title.replace(/\®/g, "(copyright)");
        title = title.replace(/\°/g, "(number)");
        title = title.replace(/\Ô/g, "(bigocir)");
        title = title.replace(/\²/g, "(square)");
        title = title.replace(/\`/g, "(accentaigu)");
        title = title.replace(/\é/g, "(eaccentaigu)");
        title = title.replace(/\É/g, "(bigeaccentaigu)");
        title = title.replace(/\&/g, "(and)");
        title = title.replace(/\//g, "(slash)");
        title = title.replace(/\’/g, "(apostrophe)");
        //title = title.replace(/\'/g,"(quote)");
        title = title.replace(/\!/g, "(warning)");
        title = title.replace(/\?/g, "(question)");
        title = title.replace(/\$/g, "(dolla)");
        title = title.replace(/\è/g, "(eaccentgrave)");
        // title = title.replace(/\–/g,"(hyphen)");
        browser.url("http://localhost:3000/details/" + title);
    });


    this.Then(/^I see image fo product$/, function() {
        var image = browser.elements("img#hoverZoom").getAttribute("src");
        console.log(image);
        //expect(image).toContain(image);
    });

    this.When(/^I can check image url$/, function() {
        var imageurl = browser.elements("img#hoverZoom").getAttribute("src");
        browser.url(imageurl);
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
