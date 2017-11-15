var db = require('../dbconnection');

var StudentSqlHelper = {

    //Get all users(including progress)
    getAllStudents: function (callback) {

        return db.query("SELECT users.id,users.FirstName,users.LastName,users.RoleId,users.Username,student_progress.Progress FROM users INNER JOIN student_progress ON student_progress.StudentId=users.id where RoleId=0", callback);

    }

};
module.exports = StudentSqlHelper;