const express = require('express'),
    app = express();

const router = require('./routes/router');

// Setup routing
app.use('/', router);

app.listen(3000, ()=> {
    console.log('Server listening on port 3000');
});