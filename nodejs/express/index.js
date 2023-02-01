const { MongoClient } = require("mongodb")
const express = require("express")
const app = express();
const client = new MongoClient("mongodb+srv://bsenk:senichak26275@cluster0.om1ex0f.mongodb.net/?retryWrites=true&w=majority")
const start = async () => {
    try{
        await client.connect()
        console.log("gotovo");
        const users = client.db().collection("users")
        // await users.insertOne({name: "bsenk", age: 22})
        // const user = await users.findOne({age: 22})
        // console.log(user);
    } catch(e) {
        console.log(e);
    }
}
start();

app.get("/gg", async (req,res)=>{
    await client.connect()
    const answer = await client.db().collection("users").findOne({age: 22})
    console.log(req.body)
    res.send(answer)
})

app.post("/gh" , async (req,res)=>{
    await client.connect()
    const answer = await client.db().collection("users").insertOne()
    console.log(req)
    res.send(answer)
})


app.listen(3000)