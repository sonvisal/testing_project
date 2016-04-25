module.exports = function() {
    var fs = require('fs');

    this.Given(/^I have visited page product "([^"]*)"$/, { timesout: 100000 }, function(title) {
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
        timesout: 100000;
    });


    this.Then(/^I see image fo product$/, { timesout: 100000 }, function() {
        var image = browser.elements("img#hoverZoom").getAttribute("src");
        console.log(image);
        //expect(image).toContain(image);
    });

    this.When(/^I can check image url$/, { timesout: 100000 }, function() {
        var imageurl = browser.elements("img#hoverZoom").getAttribute("src");
        browser.url(imageurl);
    });

    this.Then(/^I can see image found or not$/, { timesout: 100000 }, function() {
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

    this.Given(/^I have visited page Clarins-Body-Lift-Cellulite-Control the Web "([^"]*)"$/, { timesout: 100000 }, function(title) {
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
        timesout: 100000;
    });


    this.Then(/^I see image for Clarins Body Lift Cellulite Control$/, { timesout: 100000 }, function() {
        var image = browser.elements("img#hoverZoom").getAttribute("src");
        console.log(image);
        //expect(image).toContain(image);
    });

    this.When(/^I can check image url Clarins Body Lift Cellulite Control$/, { timesout: 100000 }, function() {
        var imageurl = browser.elements("img#hoverZoom").getAttribute("src");
        browser.url(imageurl);
    });

    this.Then(/^I can see image found or not Clarins Body Lift Cellulite Control$/, { timesout: 100000 }, function() {
        var title = browser.elements("title").getAttribute("textContent");
        console.log("title==" + title);
        if (title == "404 Not Found") {
            var textnotfound = browser.elements("h1").getAttribute("textContent");
            var imagenotfound = browser.elements("body > p").getAttribute("textContent");
            console.log("tile" + imagenotfound);

            if (textnotfound == "Not Found") {
                var datamatch = imagenotfound.match("(.)(\/upload.*?\.jpg|\/upload.*?\.png)(.)");
                console.log("image not found ");
                console.log("image match " + datamatch[2]);
                var data = datamatch[2];
                console.log("image url" + typeof(data));
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

    this.Given(/^I have visited page Mythos-Zippo-Fragrances-for-men the Web "([^"]*)"$/, { timesout: 100000 }, function(title) {
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
        timesout: 100000;
    });


    this.Then(/^I see image for Mythos-Zippo-Fragrances-for-men$/, { timesout: 100000 }, function() {
        var image = browser.elements("img#hoverZoom").getAttribute("src");
        console.log(image);
        //expect(image).toContain(image);
    });

    this.When(/^I can check image url Mythos-Zippo-Fragrances-for-men$/, { timesout: 100000 }, function() {
        var imageurl = browser.elements("img#hoverZoom").getAttribute("src");
        browser.url(imageurl);
    });

    this.Then(/^I can see image found or not Mythos-Zippo-Fragrances-for-men$/, { timesout: 100000 }, function() {
        var title = browser.elements("title").getAttribute("textContent");
        console.log("title==" + title);
        if (title == "404 Not Found") {
            var textnotfound = browser.elements("h1").getAttribute("textContent");
            var imagenotfound = browser.elements("body > p").getAttribute("textContent");
            console.log("tile" + imagenotfound);

            if (textnotfound == "Not Found") {
                var datamatch = imagenotfound.match("(.)(\/upload.*?\.jpg|\/upload.*?\.png)(.)");
                console.log("image not found ");
                console.log("image match " + datamatch[2]);
                var data = datamatch[2];
                console.log("image url" + typeof(data));
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
    this.Given(/^I have visited page CLARINS-AZZARO-DECIBEL-TESTER "([^"]*)"$/, { timesout: 100000 }, function(title) {
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
        timesout: 100000;
    });


    this.Then(/^I see image for CLARINS-AZZARO-DECIBEL-TESTER$/, { timesout: 100000 }, function() {
        var image = browser.elements("img#hoverZoom").getAttribute("src");
        console.log(image);
        //expect(image).toContain(image);
    });

    this.When(/^I can check image url CLARINS-AZZARO-DECIBEL-TESTER$/, { timesout: 100000 }, function() {
        var imageurl = browser.elements("img#hoverZoom").getAttribute("src");
        browser.url(imageurl);
    });

    this.Then(/^I can see image found or not CLARINS-AZZARO-DECIBEL-TESTER$/, { timesout: 100000 }, function() {
        var title = browser.elements("title").getAttribute("textContent");
        console.log("title==" + title);
        if (title == "404 Not Found") {
            var textnotfound = browser.elements("h1").getAttribute("textContent");
            var imagenotfound = browser.elements("body > p").getAttribute("textContent");
            console.log("tile" + imagenotfound);

            if (textnotfound == "Not Found") {
                var datamatch = imagenotfound.match("(.)(\/upload.*?\.jpg|\/upload.*?\.png)(.)");
                console.log("image not found ");
                console.log("image match " + datamatch[2]);
                var data = datamatch[2];
                console.log("image url" + typeof(data));
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
    this.Given(/^I have visited page COFINLUX-CAFE-ESPRESSO-P.F-EDT-TESTER "([^"]*)"$/, { timesout: 100000 }, function(title) {
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
        timesout: 100000;
    });


    this.Then(/^I see image for COFINLUX-CAFE-ESPRESSO-P.F-EDT-TESTER$/, { timesout: 100000 }, function() {
        var image = browser.elements("img#hoverZoom").getAttribute("src");
        console.log(image);
        //expect(image).toContain(image);
    });

    this.When(/^I can check image url COFINLUX-CAFE-ESPRESSO-P.F-EDT-TESTER$/, { timesout: 100000 }, function() {
        var imageurl = browser.elements("img#hoverZoom").getAttribute("src");
        browser.url(imageurl);
    });

    this.Then(/^I can see image found or not COFINLUX-CAFE-ESPRESSO-P.F-EDT-TESTER$/, { timesout: 100000 }, function() {
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
                fs.appendFile("imagenotfound.txt", data, function(err) {
                    if (err){
                      console.log("error wirte file"+err);

                    }else{
                      console.log("can read data in file");
                    }
                });
            } else {
                console.log("found image");
            }
        } else {
            console.log("product has image");
        }

    });

};
