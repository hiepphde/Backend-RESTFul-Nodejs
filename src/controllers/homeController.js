const connection = require("../configs/database")
const moment = require('moment');
const Logger = require('../middleware/logsEvent');
const logger = new Logger();
const config = require

module.exports = {
    getHomepage: async (req, res) => {
        res.render('sample.ejs')
    },

    getDataFromMysql: async (req, res) => {
        connection.query(
            `SELECT * FROM Users`,
            function(err, result, fields) {
                // console.log(`>>> Check result: ${JSON.stringify(result, null, "\t")}`);
                console.log(result)
            }
        )
        res.status(200).send('success');
    },
    testLog: async (req, res) => {
        time = moment();
        try {
            const data = 'success';
            logger.info(time, data);
            res.status(200).send('success');
        } catch (err) {
            logger.error(time, 'failure');
            res.status(400).send(err.message);
        }
    },
}