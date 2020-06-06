const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello Node JS!');
});
    
const server = app.listen(3000, function () {
    const host = server.address().address;
    const port = server.address().port;
    
    console.log('Server is working : PORT - ',port);
});