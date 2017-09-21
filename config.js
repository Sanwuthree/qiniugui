const fs=require("fs"),process=require("process")
const path=require("path")
console.log("hello world")
class GConfig{
    constructor(){
        console.log("gconfig init")
        this.cwd=process.cwd();
        this.config_path=path.join(this.cwd,"config.cfg");
        if(fs.existsSync(this.config_path)){
            this.loadConfig();
        }else{
            this.config={//初始化配置文件
                ak:"",
                sk:""
            }
            this.saveConfig();
        }
    }
    saveConfig(){
        console.log(this.cwd)
        console.log(this.config_path);
        fs.writeFile(this.config_path,JSON.stringify(this.config),(err)=>{console.log("config init")});
    }
    loadConfig(){
        try {
            this.config=JSON.parse(fs.readFileSync(this.config_path,"utf-8"));
        } catch (error) {
            this.config={}
        }
        console.log(this.config)
    }
}

module.exports=new GConfig();