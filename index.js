const express = require("express");
const app = express();

app.use(express.json());

app.get("/home", (req,res) =>{
    res.json("HOME PAGE");
});

app.get("/course/grades",authPage(["teacher","admin"]), (req,res) => {
    res.json({
        sr: 100,
        ram: 95,
        leo: 35,
    });
});

app.get("/course/:number", authCourse,(req,res)=>{
    const courseNumber = req.params.number;
    res.json(`YOU HAVE PERMISSION TO SEE COURSE ${courseNumber}`);
});

app.listen(3000, ()=>{
    console.log("server listening on port 3000");
})