/*小撇步或偷吃步或小抄*/
import http from "http"
import express from "express"
import fs from "fs"
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename /*檔案詳細位置*/ = fileURLToPath(import.meta.url);
const __dirname /*檔案路徑*/ = dirname(__filename);
const app = express()
if(!fs.existsSync("private/data")){
    fs.mkdirSync("private/data" , {
        recursive:true
    })
}
if(!fs.existsSync("private/data/click.json")){
    fs.writeFileSync("private/data/click.json" , JSON.stringify({total:0}) )
}
let globalNum = Number(JSON.parse(fs.readFileSync("private/data/click.json" , "utf8")).total)

app.use("/",express.static("public")) 

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"views/index.html"))
})/*是添加路徑或指示道路的串串*/
/*app.get("/",(req,res) => {res.end("hello world")})*/

app.get("/aribuda",(req,res) => {
    res.send("byebye world")
})

app.get("/add",(req,res) => {
    globalNum += 1
    const data = {
        total : globalNum
    }
    fs.writeFileSync("private/data/click.json" , JSON.stringify(data) )
    res.send({num:globalNum})
})

app.get("/get",(req,res) => {
    res.send({num:globalNum})
})

const server = http.createServer(app)
server.listen(8080)