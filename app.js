const express = require('express');
const app = express();
const path = require('path');

/*TODO: necesitamos bajar express para correr el app.js,
pero no me acuerdo como bajarlo*/

app.use(express.static(path.resolve(__dirname, 'public'))
);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.listen(4000, () => {
    console.log('listening on http://localhost:4000');
});