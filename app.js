var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

/*
app.get('/scrape', function(req, res){
  // Let's scrape Anchorman 2
  url = 'http://www.imdb.com/title/tt1229340/';

  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      var title, release, rating;
      var json = { title : "", release : "", rating : ""};

      $('.title_wrapper').filter(function(){
        var data = $(this);
        title = data.children().first().text().trim();
        release = data.children().last().children().last().text().trim();

        json.title = title;
        json.release = release;
      })

      $('.ratingValue').filter(function(){
        var data = $(this);
        rating = data.text().trim();

        json.rating = rating;
      })
    }

    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
      console.log('File successfully written! - Check your project directory for the output.json file');
    })

    res.send('Check your console!')
  })
})
*/

// amazon book scraping
app.get('/scrape', function(req, res){
  // Let's scrape Anchorman 2
  url = 'https://www.amazon.com/books-used-books-textbooks/b/ref=nav_shopall_bo_t3?ie=UTF8&node=283155';

  request(url, function(error, response, html){
    if(!error){
      var $ = cheerio.load(html);

      var title, listPrice, description, productDimensions, images, weight, testFind;
      //var json = { name : "", listPrice : "", description : "", productDimensions : "", images : "", weight : ""};
      var json = { title : "", listPrice : "", testFind : ""};
       
      /*
      $("#anonCarousel1").filter(function(){
        var data = $(this);
        // title = data.children().first().text().trim(); //third
        title = data.children().first().text().trim();
        listPrice = data.children(".a-color-price").text().trim();
        test = data.find(class)

        json.title = title;
        json.listPrice = listPrice;
        json.test = test;
      })
      */

      /*
      $('.ratingValue').filter(function(){
        var data = $(this);
        rating = data.text().trim();

        json.rating = rating;
      })
      */

     //$('li[class=orange]').html()
     testFind = $('li[class=a-carousel-card]').html();
     json.testFind = testFind;
    }

    fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
      console.log('File successfully written! - Check your project directory for the output.json file');
    })

    res.send('Scrape complete - Check your console!')
  })
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;