const express = require("express")

const app = express();

app.get("/gg", (req,res)=>{
    res.send(JSON.stringify([1,3,5,6]))
})

app.listen(3000)