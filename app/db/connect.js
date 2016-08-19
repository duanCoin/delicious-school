let mongoose = require("mongoose");

module.exports = {
  connect: function (mode, callback) {
    // mongoose.Promise = global.Promise;
    let url = 'mongodb://localhost/delicious-school-db';
    if (mode === 'test') {
      url = 'mongodb://localhost/delicious-school-mongodb-spec';
    }
    mongoose.connect(url, callback);
  },
  close: function (callback) {
    mongoose.connection.close(callback);
  }
};
