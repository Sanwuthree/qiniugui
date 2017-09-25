const {ipcMain,BrowserWindow}=require("electron")
const crypto=require("crypto"),qiniu=require("qiniu");
const http=require("http"),GConfig=require("../config")
const mydes=require("../utils").mydes;
let win = new BrowserWindow({
    width:500,
    height:400,
    frame:false
})
win.loadURL(`file://${__dirname}/register.html`);

//win.webContents.openDevTools()
ipcMain.on("try-regist",(evt,args)=>{
    console.log("fasd"+args)
    let mac = new qiniu.auth.digest.Mac(args[0],args[1]);
    let password=args[2];
    let config=new qiniu.conf.Config();
    config.zone=qiniu.zone.Zone_z0;
    //let bucketManager=new qiniu.bucketManager(mac,config);
    //bucketManager.listPrefix()
    let token=qiniu.util.generateAccessToken(mac,"http://rs.qbox.me/buckets")
    console.log("Acess Token" +token);
    let option={
        host:"rs.qbox.me",
        port:80,
        path:"/buckets",
        headers:{
            'Content-Type':"application/x-www-form-urlencoded",
            Authorization:token
        }
    }
    http.get(option,function(res){
        var resData="";
        res.on("data",function(data){
            resData+=data;
        })
        res.on("end",function(){
            let result=JSON.parse(resData);
            if(result.error==undefined){
                evt.returnValue=[true,result];
                let cfg=GConfig.config;
                GConfig.config.bukets=result;
                let desResult= mydes.encrypt(args[0]+" "+args[1],password+password);
                GConfig.config.sec=desResult;
                GConfig.saveConfig();
                require("./index");
                win.close();
            }else{
                evt.returnValue=[false,result.error];
            }
        })
    })

})

ipcMain.on("try-close-window",(evt,args)=>{
    if(!win.isDestroyed()){
        win.close();
    }
})


module.exports=win;