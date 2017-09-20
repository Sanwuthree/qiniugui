const {app,electron} = require("electron")
const GConfig=require("./config")

app.on('ready',(info)=>{
    //const indexView=require("./views/index");
    require("./views/login")
})