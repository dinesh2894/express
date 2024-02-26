const express = require('express');
const app = express();

const port = 3000;

console.dir(port);

app.listen(port,()=>{
    console.log(`App listen is port : ${port}`);
});

// app.use((req, res)=>{
//     console.log(req);
//     // res.send("This is response");
//     let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li></ul>";
//     res.send(code);
// });

app.get("/",(req,res)=>{
    res.send('Home path');
});
app.get("/apple",(req,res)=>{
    res.send('Apple path');
});
app.get("/orange",(req,res)=>{
    res.send('Orange path');
});
app.get("*",(req,res)=>{
    res.send('Page does not exist');
});