var db = require('../dbconnection');

var UserSqlHelper = {

    //Get all users
    getAllUsers: function (callback) {

        return db.query("Select * from users", callback);

    },
    //Get user by id
    getUserById: function (id, callback) {

        return db.query("select * from users where Id=?", [id], callback);
    },
    //Get user by name
    getUserByName: function (username, callback) {
        
                return db.query("select * from users where Username=?", [username], callback);
            },
    //Get user role info
    getUserRoleInfo: function (id, callback){
        return db.query("select * from users inner join roles on users.RoleId = roles.id where users.id = ?;",[id], callback);
    },
    //Add user
    addUser: function (user, callback) {
        return db.query("Insert into users(FirstName,LastName,RoleId) values(?,?,?)", [
            user.firstName, user.lastName, user.roleId
        ], callback);
    },
    //Delete user
    deleteUser: function (id, callback) {
        return db.query("delete from users where Id=?", [id], callback);
    },
    //Update user
    updateUser: function (id, user, callback) {
        return db.query("update task set FirstName=?,LastName=? where Id=?", [
            user.FirstName, user.LastName, id
        ], callback);
    }

};
module.exports = UserSqlHelper;