const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow(){
  // Create Browser Window
  win = new BrowserWindow({width: 1200, height: 700, resizable: false, frame: false, icon:__dirname + '/img/icon.png'});

  // Load index.html
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // Open Devtools
  //win.webContents.openDevTools();

  win.on('closed', () =>{
    win = null;
  });
}

// Run createWindow function
app.on('ready', createWindow);

// Create directories
storagePath = app.getPath("appData");
storagePath += "/Ease-Reboot";
createDirectory(storagePath);
storagePath += "/userdata";
createDirectory(storagePath);

// Quit when all windows are closed
app.on('window-all-closed', () =>{
  if (process.platform !== 'darwin'){
    app.quit();
  }
});

function createDirectory(name){
  var fs = require('fs');
  if (!fs.existsSync(name)){ // Path does not exist
    fs.mkdir(name);
  }
}
