const express=require("express");
const cors=require("cors");
const logger=require("./logger");

const app =express();

app.use(cors());
app.use(express.json());
app.use(express.static("publc"));

app.get("/",(req,res)=>{
    logger.info("Received a GET request to the root endpoint");
    res.send("Server is running");
});

app.post("/login", (req,res)=>{
    const {username}=req.body;

    if(!username){
        logger.error("user name is missing in the request body");
        return res.status(400).json({error:"user name is required"});
    }

    logger.info(`User ${username} logged in successfully`);

    res.json({message:`Welcome, ${username}!`});

});

const port=3000;

app.listen(port,()=>{
    logger.info(`server is running on port ${port}`);
})
