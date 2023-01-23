const express = require("express");
const  dirname  = require("path");
const app = express();
const port = process.env.PORT || 3000;

const path = require("path")
const hbs = require("hbs")


require("./db/conn")



const staticpath = path.join(__dirname , "../public");

app.use(express.static(staticpath))

const partialPath = path.join(__dirname,"../templates/partials")
const templatePath = path.join(__dirname,"../templates/views")
app.use('/css' , express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use('/js' , express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
hbs.registerPartials(partialPath)

app.set("view engine","hbs")
app.set("views" ,templatePath)


app.get("/",(req,res)=>{
res.render("index")
})


app.listen(port,()=>{
    console.log("server is running");
})