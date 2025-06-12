const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const fs = require('fs');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    const Index = url.format({
        protocol: 'file',
        pathname: path.join(__dirname, '../build/index.html'),
        slashes: true,
        hash: '/'
    });

    win.loadURL(Index);
}


ipcMain.handle('openDocumentWindow', () => {
    const documentWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    const DocumentPage = url.format({
        protocol: 'file',
        pathname: path.join(__dirname, '../build/index.html'),
        slashes: true,
        hash: '/document'
    });

    documentWindow.loadURL(DocumentPage);
});
ipcMain.handle('openReceiptWindow', () => {
    const documentWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    const DocumentPage = url.format({
        protocol: 'file',
        pathname: path.join(__dirname, '../build/index.html'),
        slashes: true,
        hash: '/Receipt'
    });

    documentWindow.loadURL(DocumentPage);
});

ipcMain.handle('openEditWindow', () => {
    const documentWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            webSecurity: false,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    const DocumentPage = url.format({
        protocol: 'file',
        pathname: path.join(__dirname, '../build/index.html'),
        slashes: true,
        hash: '/edit'
    });

    documentWindow.loadURL(DocumentPage);
});




ipcMain.handle('readFile', async (event, filePath) => {
    try {
        const data = await fs.promises.readFile(filePath, 'utf-8');
        return data;
    } catch (error) {
        console.error('Error al leer el archivo:', error);
        return null;
    }
});

ipcMain.handle('readDir', async (event, dirPath) => {
    try {
        const files = await fs.promises.readdir(dirPath);
        console.log(files);
        return files;
    } catch (error) {
        console.error('Error al leer el directorio:', error);
        return null;
    }
});

ipcMain.handle('writeFile', async (event, filePath, content) => {
    try {
        console.log('Contenido recibido para writeFile:', content); // Agregar este log para verificar el contenido
        console.log(filePath);
        await fs.promises.writeFile(filePath, content, 'utf-8');
        console.log('Archivo creado exitosamente:', filePath);
        return true;
    } catch (error) {
        console.error('Error al escribir el archivo:', error);
        return false;
    }
});
app.whenReady().then(createWindow);