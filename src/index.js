const {app, BrowserWindow, Menu, ipcMain} = require('electron');
const path = require('path');
const url = require('url')
        
    if(process.env.NODE_ENV !== 'production'){
        require('electron-reload')(__dirname, {
        electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
        });
        }   

let mainWindow
app.on('ready', () => {
mainWindow = new BrowserWindow(
    {   
        width: 900,
        height: 900,
        webPreferences:{
    contextIsolation: false,
    nodeIntegration: true,
    nodeIntegrationInWorker: true,
    enableRemoteModule: true
    
 }
});
mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'pages/index.html'),
    protocol: 'file',
    slashes: true
}));

const mainMenu = Menu.buildFromTemplate(templateMenu);
Menu.setApplicationMenu(mainMenu);
});
var crearficha
function crearsobre(){
    crearficha = new BrowserWindow({
  width: 900,
  height: 900,
  webPreferences:{
      contextIsolation: false,
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      enableRemoteModule: true
      
   }
      });
      crearficha.loadURL(url.format({
          pathname: path.join(__dirname, 'pages/sobreantcompleto.html'),
          protocol: 'file',
          slashes: true
      }));
      crearficha.on('closed', () => {
      
      });
  }
  
ipcMain.on('abrirsobre', (e, datos) =>{
    crearsobre();
    });

const templateMenu = [
    {
        label: 'File',
        submenu: [
            {
            label: 'New User',
            accelerator: 'CTRL+N',
            click(){
            nuevobuscador();
            }
            
            },
            {
                label: 'Crear sobre',
                accelerator: 'CTRL+M',
                click(){
                crearsobre();
                }
                
                },
        ]
    }
    
    ];
if(process.env.node_ENV !== 'production'){
    templateMenu.push({
        label: 'DevTools',
        submenu:[
            {
                label: 'Show/Hide Dev Tools',
                accelerator: 'CTRL + D',
                click(item, focusedwindow){
                  focusedwindow.toggleDevTools();
                }
            }
        ]
    })
}

