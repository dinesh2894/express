const express = require('express');
const app = express();

const port = 3000;

console.dir(port);

app.listen(port, () => {
    console.log(`App listen is port : ${port}`);
});

// app.use((req, res)=>{
//     console.log(req);
//     // res.send("This is response");
//     let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li></ul>";
//     res.send(code);
// });

app.get("/", (req, res) => {
    console.log("/");
    res.send('Home path');
});
/*app.get("/apple",(req,res)=>{
    console.log("/apple");
    res.send('Apple path');
});*/
/*app.get("/orange",(req,res)=>{
    console.log("/orange");
    res.send('Orange path');
});*/
/*
app.get("*",(req,res)=>{
    console.log("/empty path");
    res.send('Page does not exists');
});*/

/*
app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    console.log(username);
    console.log(id);
    res.send(`This is a @${username}`);
});*/
