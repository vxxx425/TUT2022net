'use strict';

//-----------------------
// 引用資料庫模組
//-----------------------
import pg from 'pg';
const {Client} = pg;
//-----------------------
// 自己的資料庫連結位址
//-----------------------
var pgConn = process.env.pgURL;


//產生可同步執行sql的函式
export function query(sql, value=null) {
    return new Promise((resolve, reject) => {
        //產生資料庫連線物件
        var client = new Client({
            connectionString: pgConn,
            ssl: true
        })     

        //連結資料庫
        client.connect();

        //執行並回覆結果  
        client.query(sql, value, (err, results) => {                   
            if (err){
                reject(err);
            }else{
                resolve(results);
            }

            //關閉連線
            client.end();
        });
    });
}

//匯出
// module.exports = query;