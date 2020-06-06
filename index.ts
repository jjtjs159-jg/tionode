const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3000;

app.use(cors());

app.use(bodyParser.json());
app.get('/', (req, res) => {
    return res.json({
        name: 'jg park',
    });
});
    
const server = app.listen(3000, function () {
    const host = server.address().address;
    const port = server.address().port;
    
    console.log('Server is working : PORT - ',port);
});