const {ipcMain,BrowserWindow}=require("electron");
const listdirs=require("list-dir");
const fs=require("fs");
const path=require("path")
let index_win=new BrowserWindow({
    width:800,
    height:600
});
index_win.loadURL(`file:///${__dirname}/index.html`);
index_win.webContents.openDevTools();
ipcMain.on("drop-files",(evt,args)=>{
    console.log(args);
    // evt.returnValue=args
})

module.exports=index_win;