const {ipcMain,BrowserWindow}=require("electron");
const listdirs=require("list-dir");
const fs=require("fs");
const path=require("path"),process=require("process")
let index_win=new BrowserWindow({
    width:800,
    height:600
});
index_win.loadURL(`file:///${__dirname}/index.html`);
setTimeout(()=> {
    //index_win.webContents.executeJavaScript(`console.log(${process.cwd()})`);
    //index_win.webContents.executeJavaScript(`console.log(${__dirname})`);
    index_win.webContents.send("message",__dirname);
    index_win.webContents.send("message","CWD="+process.cwd())
    console.log(__dirname)
}, 3000);
index_win.webContents.openDevTools();
ipcMain.on("drop-files",(evt,args)=>{
    console.log(args);
    // evt.returnValue=args
})


module.exports=index_win;