import {Post} from './model/post.model';
import {setRouting} from './app.routing';
import express = require('express');
import bodyParser = require('body-parser');
import moment = require('moment');

const config = {
    port: 8000
}

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

setRouting(app);
app.listen(config.port, function() {
     console.log(`Express server listening on port ${config.port}.`);
});
