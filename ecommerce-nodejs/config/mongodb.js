var mongoose = require('mongoose');

// dbname: local
mongoose.connect('mongodb://localhost/local', { useNewUrlParser: true }, function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Conectado a MongoDB');
    }
});
module.exports = mongoose;
