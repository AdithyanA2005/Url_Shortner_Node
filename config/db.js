const mongoose = require('mongoose');

module.exports.connect = (done) => {
    const url = 'mongodb://localhost/';
    const dbname = 'Url_Shortner_Node';
    const mongo_url = url + dbname;

    mongoose.connect(mongo_url, {
        useNewUrlParser: true,
        useUndifiedTopology: true
    });

    mongoose.connection.on('error', (err) => {
        console.log('DB Connection Error Occured');
        console.log(err);
    });

    mongoose.connection.once('open', () => {
        console.log('DB Connection Successfull');
        console.log('Connected To: ' + mongo_url);
    });
}
