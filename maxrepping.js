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
