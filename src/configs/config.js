module.exports = {
    port: process.env.PORT || 3333,
    host: process.env.HOST || 'localhost',
    version: process.env.VERSION || 'v1',
    env: process.env.ENV || 'dev',
    db_host: process.env.DB_HOST || '127.0.0.1',
    db_port: process.env.DB_PORT || 3306,
    db_user: process.env.DB_USER || 'admin',
    db_password: process.env.DB_PASSWORD || 'admin@123',
    db_name: process.env.DB_NAME || 'database',

    mongo_uri_log: process.env.MONGO_URI_LOG || 'mongodb://gsd447:Gonsa%402271@10.0.15.196:27017/LOGGER?authSource=admin',
}