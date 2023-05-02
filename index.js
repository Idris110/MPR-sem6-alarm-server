const express = require('express');
const cors = require("cors");

const app = express();

var alarm = 0;

app.use(
    cors({
        origin:"http://localhost:3000",
    })
)
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Home page")
});

app.get('/on', (req, res) => {
    alarm = 1;
    res.send("Turned On")
});

app.get('/off', (req, res) => {
    alarm = 0;
    res.send("Turned Off")
});

app.get('/1', (req, res) => {
    alarm = 1;
    res.send("Turned On")
});

app.get('/0', (req, res) => {
    alarm = 0;
    res.send("Turned Off")
});

app.get('/alarm', (req, res) => {
    res.send({"alarm" : alarm});
});

app.get('/api', (req, res) => { //esp reads
    // res.send("20");
    setTimeout(()=>(res.send("5")), 10*1000);
});



//PORT ENVIRONMENT VARIABLE 
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));