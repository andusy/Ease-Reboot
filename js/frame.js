(function () {

      var remote = require('electron').remote;

     function init() {
        document.getElementById("min-btn").addEventListener("click", function (e) {
              var window = remote.getCurrentWindow()
              window.minimize();
         });

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

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
