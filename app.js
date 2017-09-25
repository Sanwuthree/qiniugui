const {ipcMain,app,electron} = require("electron")
const GConfig=require("./config")
const fs=require("fs"),path=require("path"),process=require("process")
app.on('ready',(info)=>{
    GConfig.loadConfig();
    //const indexView=require("./views/index");
    if(fs.existsSync(path.join(process.cwd(),"config.cfg"))){
        require("./views/login")
    }else{
        require("./views/register")
    }
    
});
app.on("window-all-closed",()=>{
    app.exit();
})
ipcMain.on("try-close-window",(evt,args)=>{
    console.log(evt.sender);
})
