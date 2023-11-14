require('dotenv').config()
const config = require('./src/configs/config');
const configViewEngine = require('./src/configs/viewEngine');
const path = require('path')
const express = require('express');
const initWebRouters = require('./src/routes');

//config express and env
const app = express();
const port = config.port;
const host = config.host;

configViewEngine(app);
initWebRouters(app);

app.listen(port, host, () => {
  console.log(`App listening on ${host}:${port}`);
})