const express = require("express");
const bodyParser = require("body-parser");


const apiRouter = require("../src/routes/index")
const {PORT}  = require("./config/serverconfig")


const SetupAnsStartServer = async () =>{
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use("/api",apiRouter);
    
    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`);
    })
}

SetupAnsStartServer();