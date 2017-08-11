(function () {

      var remote = require('electron').remote;

     function init() {
          document.getElementById("close-btn").addEventListener("click", function (e) {
               var window = remote.getCurrentWindow()
               window.close();
          });
     };

     document.onreadystatechange = function () {
          if (document.readyState == "complete") {
               init();
          }
     };

})();
