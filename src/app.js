const express = require("express")
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn")
app.get("/",(req,res)=>{

res.send("aswome")

})

app.listen(port,()=>{
    console.log("server is running");
})