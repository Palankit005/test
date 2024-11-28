const express=require("express");
const app=express();
app.get("/",(req,res)=>{
    res.send("hello world");

});
app.get("/data",(req,res)=>{
    res.send(new Date().toString());
});
app.use((req,res)=>{
    res.status(404).send("Page not found");
});

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is runnning on PORT ${PORT}`);
});