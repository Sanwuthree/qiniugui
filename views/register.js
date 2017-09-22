const {ipcMain,BrowserWindow}=require("electron")
const crypto=require("crypto"),qiniu=require("qiniu");

let win = new BrowserWindow({
    width:500,
    height:400,
    frame:false
})
win.loadURL(`file://${__dirname}/register.html`);

//win.webContents.openDevTools()

module.exports=win;