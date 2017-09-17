const {app,BrowserWindow,electron} = require("electron")

let main_win=null;
app.on('ready',(info)=>{
    console.log("ok")
    main_win=new BrowserWindow({
        width:860,
        height:620
    })
})