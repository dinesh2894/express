const express = require('express');
const app = express();

const port = 3000;

console.dir(port);

app.listen(port,()=>{
    console.log(`App listen is port : ${port}`);
});

app.use((req, res)=>{
    console.log(req);
    res.send("This is response");
});