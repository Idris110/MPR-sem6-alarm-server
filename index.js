const express = require('express');
const cors = require("cors");
const path = require("path");

const app = express();

var alarm = "0";

app.use(
    cors({
        origin:"http://localhost:3000",
    })
)
app.use(express.json());


app.get('/', (req, res) => {
    // res.send("")
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/on', (req, res) => {
    alarm = "1";
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/off', (req, res) => {
    alarm = "0";
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/1', (req, res) => {
    alarm = "1";
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/0', (req, res) => {
    alarm = "0";
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/alarm', (req, res) => {
    res.send(alarm);
});

app.get('/api', (req, res) => { //esp reads
    // res.send("20");
    setTimeout(()=>(res.send("5")), 10*1000);
});



//PORT ENVIRONMENT VARIABLE 
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));