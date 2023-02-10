/*小撇步或偷吃步或小抄*/
import "dotenv/config"
import http from "http"
import express from "express"
import fs from "fs"
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import {query} from "./asyncDB.js"

const __filename /*檔案詳細位置*/ = fileURLToPath(import.meta.url);
const __dirname /*檔案路徑*/ = dirname(__filename);
const app = express()
// if(!fs.existsSync("private/data")){
//     fs.mkdirSync("private/data" , {
//         recursive:true
//     })
// }
// if(!fs.existsSync("private/data/click.json")){
//     fs.writeFileSync("private/data/click.json" , JSON.stringify({total:0}) )
// }
// let globalNum = Number(JSON.parse(fs.readFileSync("private/data/click.json" , "utf8")).total)

let globalNum = 0
getGlobalNum().then((num) =>{
    globalNum = num
})

// (async () => {
//     globalNum = await getGlobalNum()    
// })()

async function incGlobalNum() {
    try {
        await query("UPDATE push_num SET num = num+1 WHERE id ='global_num'")
    } catch (error) {
        console.error(error)
    }
}

async function getGlobalNum() {
    try {
        return (await query("SELECT * FROM push_num WHERE id ='global_num'")).rows[0].num
    } catch (error) {
        console.error(error)
    }
}

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
    incGlobalNum()
    res.send({num:globalNum})
})

app.get("/get",(req,res) => {
    res.send({num:globalNum})
})

const server = http.createServer(app)
server.listen(8080)