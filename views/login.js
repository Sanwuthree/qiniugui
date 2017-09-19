const {ipcMain,BrowserWindow}=require("electron");
let login_win=new BrowserWindow({
    width:500,
    height:400,
    maximizable:false,
    minimizable:false,
    resizable:false,
    autoHideMenuBar:true
});
login_win.loadURL(`file:///${__dirname}/login.html`);