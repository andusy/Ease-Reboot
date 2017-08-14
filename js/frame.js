(function () {

      var remote = require('electron').remote;

     function init() {
        document.getElementById("min-btn").addEventListener("click", function (e) {
              var window = remote.getCurrentWindow()
              window.minimize();
         });

         ///////////////////////////////////////////////////
         /////////   Help Modal  //////////////////////////
         /////////////////////////////////////////////////
         var helpModal = document.getElementById('help-modal');
         var helpBTN = document.getElementById("help-btn");
         var helpSP = document.getElementById('help-close');

         // When the user clicks on the button, open the modal
         document.getElementById("help-btn").addEventListener("click", function (e) {
            helpModal.style.display = "block";
         });

         // When the user clicks on <span> (x), close the modal
         helpSP.onclick = function() {
             helpModal.style.display = "none";
         }

         ///////////////////////////////////////////////////
         /////////   Settings Modal  //////////////////////
         /////////////////////////////////////////////////
         var setModal = document.getElementById('settings-modal');
         var setBTN = document.getElementById("settings-btn");
         var setSP = document.getElementById('settings-close');

         // When the user clicks on the button, open the modal
         document.getElementById("settings-btn").addEventListener("click", function (e) {
            setModal.style.display = "block";
         });

         // When the user clicks on <span> (x), close the modal
         setSP.onclick = function() {
             setModal.style.display = "none";
         }

         // When the user clicks anywhere outside of the modal, close it
         window.onclick = function(event) {
             if (event.target == setModal) {
                 setModal.style.display = "none";
             } else if (event.target == helpModal){
                helpModal.style.display = "none";
             }
         }

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
