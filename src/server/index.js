const express = require("express"),
bodyParser = require("body-parser"),
cors = require("cors"),
app = express(),
port = 3000;

app.use(bodyParser.json());



app.listen(port, () => console.log(`Server is listening on port: ${port}`));