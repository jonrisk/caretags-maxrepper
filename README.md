caretags-maxrepper
=======================

## What is this?
On phpBB forums running the [phpBB Reputation System](https://github.com/Pico/phpBB-Reputation-System) there's a glitch that will allow you to add multiple rep to a post if you are able to click fast enough to generate enough Rate boxes and then fast enough to click Rate on those boxes. Typically it's only possible to add more than 2 rep without getting lucky. I put together this small bookmarklet that will do the dirty work for you. The results aren't consistent. Sometimes it still only generates 1 rep, while my current max is been 5.

## The bookmarklet
Drag this [link](javascript:(function()%7Bfunction%20callback()%7B(function(%24)%7Bvar%20jQuery%3D%24%3B%24(document).ready(function()%20%7Bvar%20hash%20%3D%20window.location.hash.substr(1)%3Bvar%20run%3Bfor%20(run%20%3D%200%3B%20run%20%3C%2010%3B%20run%2B%2B)%20%7B%24(%22div%5Bid%3D%20%22%20%2B%20hash%20%2B%20%22%5D%20.rate-good-icon%20a%5Btitle%3D'Rate%20post'%5D%22).click()%3B%7DsetTimeout(function()%7B%24(%22input%5Bvalue%3D'Rate'%5D%22).click()%3B%7D%2C%205000)%3B%7D)%7D)(jQuery.noConflict(true))%7Dvar%20s%3Ddocument.createElement(%22script%22)%3Bs.src%3D%22https%3A%2F%2Fajax.googleapis.com%2Fajax%2Flibs%2Fjquery%2F1.7.1%2Fjquery.min.js%22%3Bif(s.addEventListener)%7Bs.addEventListener(%22load%22%2Ccallback%2Cfalse)%7Delse%20if(s.readyState)%7Bs.onreadystatechange%3Dcallback%7Ddocument.body.appendChild(s)%3B%7D)()) to your bookmark bar to create a bookmarklet. 

## To use
1. Find the post you want to rep and click the post's title link (the one right above the post date. See below.)
![care-tags post](https://cloud.githubusercontent.com/assets/10915868/11732780/5cbb2846-9f75-11e5-8394-cedcbd3810c6.png)
2. The bookmarklet will grab the post id and generate 10 rate boxes (the more, the better your chances of getting >1 rep)
3. After five seconds, all of the rate buttons will get hit, hopefully netting you more than one rep.
4. If you were only able to uprep once, delete the rep, refresh the page and try again.

Javascript Bookmarklet generated by Peter Coles' handy [Bookmark Creator with Script Includer](http://mrcoles.com/bookmarklet/).
