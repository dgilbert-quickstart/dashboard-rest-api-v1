const express = require("express"); //import express library 
const cors = require("cors"); //import cors
const app = express(); //create a new express instance in memory 

//- node middleware 
app.use(cors()) //add cors to node middleware to allow same site or localhost access

const SERVER_PORT = 8080; //localhost range - 3000 - 9999

//- GET endpoint - url endpoint or route - ie: json placeholder, githpy api 
app.get("/", (req,res) => {
    const _msg = "# Dashboard api 1.0.0";
    console.log(_msg)
    res.send(_msg)
});

app.get("/test1", (req,res) => {
    const _msg = "# Dashboard api 1.0.0 - test1 route";
    console.log(_msg)
    res.send(_msg)
});

//-other - POST, DELETE, PUT

//-start node exporess web server - ie: live server
app.listen(SERVER_PORT, ()=>{
    let _msg = "node express websever running at port: " + SERVER_PORT;
    console.log(_msg);
})


//node src/index.js 
//node src/index.js --watch 
