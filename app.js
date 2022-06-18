const express = require('express');
const app = express();

const path = require('path');

const port = 4000;

const indexPath= path.resolve(__dirname,'./views/index.html');
const publicPath= path.resolve(__dirname,'./public');

/*npm install express --save <---para bajar express */

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(indexPath);
});

app.listen(port, () => {
    console.log('listening on http://localhost:'+port);
});
