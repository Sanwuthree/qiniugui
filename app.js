const {app,electron} = require("electron")
const GConfig=require("./config")
const fs=require("fs"),path=require("path"),process=require("process")
app.on('ready',(info)=>{
    //const indexView=require("./views/index");
    if(!fs.existsSync(path.join(process.cwd(),"config.cfg"))){
        require("./views/login")
    }else{
        require("./views/register")
    }
    
});