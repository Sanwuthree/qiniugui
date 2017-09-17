const {ipcMain,BrowserWindow}=require("electron");
let index_win=new BrowserWindow({
    width:800,
    height:600
});
index_win.loadURL(`file:///${__dirname}/index.html`);
index_win.webContents.openDevTools();
ipcMain.on("drop-files",(evt,args)=>{
    console.log(args);
})

module.exports=index_win;