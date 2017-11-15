var db = require('../dbconnection');

var QuoteSqlHelper = {

    //Get all users
    getQuote: function (callback) {

        return db.query("Select * from quote", callback);

    },
    //Change quote
    updateQuote: function (body, callback) {

        return db.query("update quote set Text=? where id=1", [
            body.text
        ], callback);
    }

};
module.exports = QuoteSqlHelper;