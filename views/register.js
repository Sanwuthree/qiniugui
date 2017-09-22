const {ipcMain,BrowserWindow}=require("electron")
const crypto=require("crypto"),qiniu=require("qiniu");

let win = new BrowserWindow({
    width:500,
    height:400,
    frame:false
})
win.loadURL(`file://${__dirname}/register.html`);

//win.webContents.openDevTools()
ipcMain.on("try-regist",(evt,args)=>{
    let mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    let config=new qiniu.conf.Config();
    config.zone=qiniu.zone.Zone_z0;
    let bucketManager=new qiniu.bucketManager(mac,config);
    //bucketManager.listPrefix()
})


module.exports=win;