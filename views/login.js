const {ipcMain,BrowserWindow}=require("electron");
const mydes=require("../utils").mydes;
const GConfig=require("../config")
let login_win=new BrowserWindow({
    width:500,
    height:400,
    maximizable:false,
    minimizable:false,
    resizable:false,
    autoHideMenuBar:true,
    frame:false
});
login_win.loadURL(`file:///${__dirname}/login.html`);
//login_win.webContents.openDevTools()
ipcMain.on("try-login",(evt,args)=>{
    let password=args+args;
    let str= GConfig.config.sec;
    let result;
    try {
        result=mydes.decrypt(str,password,0);
        evt.returnValue=[true,result]
        console.log(result)
        require("./index")
        login_win.close();
    } catch (error) {
        evt.returnValue=[false,"解密AKSK出错 "+error.message]
    }
})
ipcMain.on("try-reset",(evt,args)=>{
    GConfig.deleteCofnig();
    require("./register")
    login_win.close();
    
})  
ipcMain.on("try-close-window",(evt,args)=>{
    if(!login_win.isDestroyed()){
        login_win.close();
    }
})