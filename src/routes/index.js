const webRouter = require('./web');
const config = require('../../src/configs/config');

const VERSION = config.version;
const ENV = config.env;

let initWebRouters = (app) => {
    app.get('/', (req, res) => {
        res.send('Welcome to project of Hiepph!')
    })

    app.use(`/${ENV}/${VERSION}/`, webRouter);
}
module.exports = initWebRouters;