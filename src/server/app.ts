import express = require('express');
import bodyParser = require('body-parser');

const config = {
    port: 8000
}

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (request: express.Request, response: express.Response) => {
    let options = {
        root: __dirname + '/../client'
    };

    response.sendFile('index.html', options);
});

app.use(express.static('public'));
app.listen(config.port, function() {
     console.log(`Express server listening on port ${config.port}.`);
});