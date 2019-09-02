const { app, BrowserWindow } = require('electron');

function createWindow() {
    //create browser window
    let win = new BrowserWindow({
        width: 400,
        height: 400,
        webPreference: {
            nodeIntegration: true
        }
    });

    //load index.html as app
    win.loadFile('index.html');

    //for dev tools
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
});