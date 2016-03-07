import express = require('express');
import bodyParser = require('body-parser');
import path = require('path');

const config = {
    port: 8000
}

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static resources - the dummy way
app.get('/', (request: express.Request, response: express.Response) => {
    let options = {
        root: __dirname + '/../../src/client'
    };

    response.sendFile('index.html', options);
});
app.use('/content', express.static(path.join(__dirname, '/../../src/client/content')));
app.use('/bower_components', express.static(path.join(__dirname, '/../../bower_components')));

// api

app.listen(config.port, function() {
     console.log(`Express server listening on port ${config.port}.`);
});