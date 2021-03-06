caretags-maxrepper
=======================

## What is this?
On phpBB forums running the [phpBB Reputation System](https://github.com/Pico/phpBB-Reputation-System) there's a glitch that will allow you to add multiple rep to a post if you are able to click fast enough to generate enough Rate boxes and then fast enough to click Rate on those boxes. Typically it's impossible to add more than 2 rep without getting lucky. I put together this small bookmarklet that will do the dirty work for you. The results aren't consistent. Sometimes it still only generates 1 rep, while my current max is been 5.

## The bookmarklet
Sadly, github doesn't allow me to link the bookmarklet directly here in the README.md. I recommend you grab the js from the maxrepping.js file (or just copy from below) and then use Peter Coles' handy [Bookmark Creator with Script Includer](http://mrcoles.com/bookmarklet/) to create the bookmarklet which you can then drag to your bookmark bar to use anytime.

```
$(document).ready(function() {

var hash = window.location.hash.substr(1);

  var run;
    for (run = 0; run < 10; run++) {
      $("div[id= " + hash + "] .rate-good-icon a[title='Rate post']").click();
    }

      setTimeout(function(){
        $("input[value='Rate']").click();
      }, 5000);

});
```

## To use
1. Find the post you want to rep and click the post's title link (the one right above the post date. See below.)
![care-tags post](https://cloud.githubusercontent.com/assets/10915868/11733377/bae4f15e-9f7a-11e5-8b15-ac6f1e6ccae4.png)
2. Click the bookmarklet in your bookmark bar. The bookmarklet will grab the post id and generate 10 rate boxes (the more, the better your chances of getting >1 rep)
3. After five seconds, all of the rate buttons will get hit, hopefully netting you more than one rep.
4. If you were only able to uprep once, delete the rep, refresh the page and try again.
