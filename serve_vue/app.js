const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");
var pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    port: 3306,
    database: "oa",
    connectionLimit: 15
})
var server = express();
server.use(cors({
    origin: ["http://127.0.0.1:8080", "http://localhost:8080"],
    credentials: true
}))
server.use(session({
    secret: "128位字符串",
    resave: true,
    saveUninitialized: true
}))
server.use(express.static("public"));
server.listen(3000);

//登陆
server.get("/login", (req, res) => {
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    var sql = "SELECT uname,uid FROM oa_user WHERE uname=? AND upwd=?";
    pool.query(sql, [uname, upwd], (err, result) => {
        if (err) throw err;
        if (result.length == 0) {
            res.send({ code: -1, msg: "手机号或密码错误" });

        } else {
            // req.session.uname = result[0].uname;
            // req.session.uid = result[0].uid;
            // session.setAttribute("uname", req.seesion.uname);
            // console.log(req.session.uname);
            res.send({ code: 1, msg: "登录成功", u: uname });


        }
    });



});
//确认用户名是否已经注册
server.get("/user_name", (req, res) => {
    var uname = req.query.uname;
    pool.query("SELECT uname,uid FROM oa_user WHERE uname=?", [uname], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send({ code: -1, msg: "该用户已经注册" });
        } else {

            res.send({ code: 1, msg: "可以注册", u: uname });
        }
    })
});
//注册
server.get("/reg", (req, res) => {
        var obj = req.query;
        pool.query("INSERT INTO oa_user SET ?", [obj], (err, result) => {
            if (err) throw err;
            res.send({ code: 1, msg: "sucess" });
        });


    })
    //申请
server.get("/add", (req, res) => {
    var obj = req.query;
    if(obj.oa_id!=null) {
        pool.query("UPDATE oa_submit SET oa_title=?,oa_state=?,oa_date=?,oa_work=?,uname=?,oa_now=?,oa_detail=? WHERE oa_id=?", [obj.oa_title,obj.oa_state,obj.oa_date,obj.oa_work,obj.uname,obj.oa_now,obj.oa_detail,obj.oa_id], (err, result) => {
            if (err) throw err;
             res.send({ code: 1, msg: "更新成功" })
        });
       
    } else {

        pool.query("INSERT INTO oa_submit SET ?", [obj], (err, result) => {
            if (err) throw err;
            res.send({ code: 1, msg: "添加成功" });
        });
    }

});
//费用申请
server.get("/add_dues", (req, res) => {
    var obj = req.query;
    if(obj.dues_id!=null) {
        pool.query("UPDATE oa_dues SET dues_title=?,dues_state=?,dues_date=?,dues_work=?,uname=?,dues_now=?,dues_reason=?,dues_price=?,dues_time=? WHERE dues_id=?", [obj.dues_title,obj.dues_state,obj.dues_date,obj.dues_work,obj.uname,obj.dues_now,obj.dues_reason,obj.dues_price,obj.dues_time,obj.dues_id], (err, result) => {
            if (err) throw err;
             res.send({ code: 1, msg: "更新成功" })
        });
       
    } else {

    pool.query("INSERT INTO oa_dues SET ?", [obj], (err, result) => {
        if (err) throw err;
        res.send({ code: 1, msg: "sucess" });
    });
}
});
//项目申请
server.get("/add_item", (req, res) => {
    var obj = req.query;
    if(obj.item_id!=null) {
        pool.query("UPDATE oa_item SET item_title=?,item_state=?,item_date=?,item_work=?,uname=?,item_detail=?,item_price=?,item_time=? WHERE item_id=?", [obj.item_title,obj.item_state,obj.item_date,obj.item_work,obj.uname,obj.item_detail,obj.item_price,obj.item_time,obj.item_id], (err, result) => {
            if (err) throw err;
             res.send({ code: 1, msg: "更新成功" })
        });
       
    } else {

    pool.query("INSERT INTO oa_item SET ?", [obj], (err, result) => {
        if (err) throw err;
        res.send({ code: 1, msg: "sucess" });
    });
}
});
//总list
//add_submit;
server.get("/add_list", (req, res) => {
    var pno = req.query.pno;
    var ps = req.query.pageSize;
    if (!pno) { pno = 1 }
    if (!ps) { ps = 8 }
    var obj = { code: 1, msg: "sucess" };
    var sql = "SELECT oa_title,oa_id,oa_state,oa_work,oa_now,oa_date,uname FROM oa_submit LIMIT ?,?";
    var off = (pno - 1) * ps;
    ps = parseInt(ps);
    pool.query(sql, [off, ps], (err, result) => {
        if (err) throw err
        obj.list = result;
        var sql1 = "SELECT count(*) AS c FROM oa_submit";
        pool.query(sql1, (err, result) => {
            if (err) throw err
            var pc = result[0].c;
            console.log(pc);
            obj.total = pc;
            res.send(obj);
        })
    });
});
//分页查询参数
function getPagequery(req) {
    var pno = req.query.pno;
    var ps = req.query.pageSize;
    if (!pno) { pno = 1 }
    if (!ps) { ps = 9 }
    var off = (pno - 1) * ps;
    ps = parseInt(ps);
    return {off, ps}
}
//查询 入职申请接口
server.get("/add_enter",(req,res)=>{
    var oa_now=req.query.oa_now;
    const { off, ps } = getPagequery(req);
    pool.query("SELECT*FROM oa_submit WHERE oa_now=? LIMIT ?,?",[oa_now, off, ps],(err,result)=>{
        if(err) throw err
        var sql1="SELECT count(*) AS c FROM oa_submit WHERE oa_now=?";
        pool.query(sql1,[oa_now],(err,count)=>{
            if(err) throw err
            var total=count[0].c;
            res.total=total;
            var resObj={
                code:1,
                msg:"查询成功",
                total,
                list:result
            }
            res.send(resObj);
        })
    })
})


function getPagetotal(oa_now,req){
   
  
}
//查询 离职申请接口
server.get("/add_leave",(req,res)=>{
    var oa_now=req.query.oa_now;
    const { off, ps } = getPagequery(req);
    pool.query("SELECT*FROM oa_submit WHERE oa_now=? LIMIT ?,?",[oa_now, off, ps],(err,result)=>{
        if(err) throw err;
        var sql1 = "SELECT count(*) AS c FROM oa_submit WHERE oa_now=?";
        pool.query(sql1,[oa_now], (err, count) => {
            if (err) throw err
            var total = count[0].c;
            result.total = total;
            var resObj = { 
                code: 1, 
                msg: "查询成功",
                total,
                list: result
            }
            res.send(resObj);
        })
    })
})
//请假申请
server.get("/add_applay",(req,res)=>{
   var oa_now=req.query.oa_now;
    const { off, ps } = getPagequery(req);
    pool.query("SELECT*FROM oa_submit WHERE oa_now=? LIMIT ?,?",[oa_now, off, ps],(err,result)=>{
        if(err) throw err;
        var sql1 = "SELECT count(*) AS c FROM oa_submit WHERE oa_now=?";
        pool.query(sql1,[oa_now], (err, count) => {
            if (err) throw err
            var total = count[0].c;
            result.total = total;
            var resObj = { 
                code: 1, 
                msg: "查询成功",
                total,
                list: result
            }
            res.send(resObj);
        })
    })
  
})
//出差申请
server.get("/add_go",(req,res)=>{
    var oa_now=req.query.oa_now;
    const { off, ps } = getPagequery(req);
    pool.query("SELECT*FROM oa_submit WHERE oa_now=? LIMIT ?,?",[oa_now, off, ps],(err,result)=>{
        if(err) throw err;
        var sql1 = "SELECT count(*) AS c FROM oa_submit WHERE oa_now=?";
        pool.query(sql1,[oa_now], (err, count) => {
            if (err) throw err
            var total = count[0].c;
            result.total = total;
            var resObj = { 
                code: 1, 
                msg: "查询成功",
                total,
                list: result
            }
            res.send(resObj);
        })
    })  
})

//出差费用申请
server.get("/dues_go",(req,res)=>{
    var dues_now=req.query.dues_now;
    const { off, ps } = getPagequery(req);
    pool.query("SELECT*FROM oa_dues WHERE dues_now=? LIMIT ?,?",[dues_now, off, ps],(err,result)=>{
        if(err) throw err;
        var sql1 = "SELECT count(*) AS c FROM oa_dues WHERE dues_now=?";
        pool.query(sql1,[dues_now], (err, count) => {
            if (err) throw err
            var total = count[0].c;
            result.total = total;
            var resObj = { 
                code: 1, 
                msg: "查询成功",
                total,
                list: result
            }
            res.send(resObj);
        })
    })  
})
//出差报销申请
server.get("/dues_d",(req,res)=>{
    var dues_now=req.query.dues_now;
    const { off, ps } = getPagequery(req);
    pool.query("SELECT*FROM oa_dues WHERE dues_now=? LIMIT ?,?",[dues_now, off, ps],(err,result)=>{
        if(err) throw err;
        var sql1 = "SELECT count(*) AS c FROM oa_dues WHERE dues_now=?";
        pool.query(sql1,[dues_now], (err, count) => {
            if (err) throw err
            var total = count[0].c;
            result.total = total;
            var resObj = { 
                code: 1, 
                msg: "查询成功",
                total,
                list: result
            }
            res.send(resObj);
        })
    })  
})
//借款申请
server.get("/dues_apply",(req,res)=>{
    var dues_now=req.query.dues_now;
    const { off, ps } = getPagequery(req);
    pool.query("SELECT*FROM oa_dues WHERE dues_now=? LIMIT ?,?",[dues_now, off, ps],(err,result)=>{
        if(err) throw err;
        var sql1 = "SELECT count(*) AS c FROM oa_dues WHERE dues_now=?";
        pool.query(sql1,[dues_now], (err, count) => {
            if (err) throw err
            var total = count[0].c;
            result.total = total;
            var resObj = { 
                code: 1, 
                msg: "查询成功",
                total,
                list: result
            }
            res.send(resObj);
        })
    })  
})
//项目经理变更
server.get("/item_change",(req,res)=>{
    var item_work=req.query.item_work;
    const { off, ps } = getPagequery(req);
    pool.query("SELECT*FROM oa_item WHERE item_work=? LIMIT ?,?",[item_work, off, ps],(err,result)=>{
        if(err) throw err;
        var sql1 = "SELECT count(*) AS c FROM oa_item WHERE item_work=?";
        pool.query(sql1,[item_work], (err, count) => {
            if (err) throw err
            var total = count[0].c;
            result.total = total;
            var resObj = { 
                code: 1, 
                msg: "查询成功",
                total,
                list: result
            }
            res.send(resObj);
        })
    })  
})
//项目单据快递确认
server.get("/item_sure",(req,res)=>{
    var item_work=req.query.item_work;
    const { off, ps } = getPagequery(req);
    pool.query("SELECT*FROM oa_item WHERE item_work=? LIMIT ?,?",[item_work, off, ps],(err,result)=>{
        if(err) throw err;
        var sql1 = "SELECT count(*) AS c FROM oa_item WHERE item_work=?";
        pool.query(sql1,[item_work], (err, count) => {
            if (err) throw err
            var total = count[0].c;
            result.total = total;
            var resObj = { 
                code: 1, 
                msg: "查询成功",
                total,
                list: result
            }
            res.send(resObj);
        })
    })  
})

//项目立项申请
server.get("/item_start",(req,res)=>{
    var item_work=req.query.item_work;
    const { off, ps } = getPagequery(req);
    pool.query("SELECT*FROM oa_item WHERE item_work=? LIMIT ?,?",[item_work, off, ps],(err,result)=>{
        if(err) throw err;
        var sql1 = "SELECT count(*) AS c FROM oa_item WHERE item_work=?";
        pool.query(sql1,[item_work], (err, count) => {
            if (err) throw err
            var total = count[0].c;
            result.total = total;
            var resObj = { 
                code: 1, 
                msg: "查询成功",
                total,
                list: result
            }
            res.send(resObj);
        })
    })  
})

//删除
//删除add_id
server.get("/delete_add_id",(req,res)=>{
    var oa_id=req.query.oa_id;
    pool.query("DELETE FROM oa_submit WHERE oa_id=?",[oa_id],(err,result)=>{
        if(err) throw err
        res.send({code:1,msg:"sucess"});
    })
})
server.get("/delete_dues_id",(req,res)=>{
    var dues_id=req.query.dues_id;
    pool.query("DELETE FROM oa_dues WHERE dues_id=?",[dues_id],(err,result)=>{
        if(err) throw err
        res.send({code:1,msg:"sucess"});
    })
})
server.get("/delete_item_id",(req,res)=>{
    var item_id=req.query.item_id;
    pool.query("DELETE FROM oa_item WHERE item_id=?",[item_id],(err,result)=>{
        if(err) throw err
        res.send({code:1,msg:"sucess"});
    })
})
