var LocalStrategy   = require('passport-local').Strategy;
var UserHelper = require('../db/helpers/UserSqlHelper.js');
var db = require('../db/dbconnection');

var mysql = require('mysql');


// connection.query('USE vidyawxx_build2');	

// expose this function to our app using module.exports
module.exports = function(passport) {

	// =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
		done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
		// db.query("select users.id as userid,roles.id as roleid from users inner join roles on users.RoleId = roles.id where users.id = ?;",[id],function(err,rows){	
		// 	done(err, rows[0]);
        // });
        UserHelper.getUserRoleInfo(id,function(err,rows){	
			done(err, rows[0]);
		});
      
    });
	



    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) { // callback with email and password from our form

        //  db.query("select * from users where Username=?",[username],function(err,rows){
		// 	if (err)
        //         return done(err);
		// 	 if (!rows.length) {
        //         return done(null, false, "User not found"); // req.flash is the way to set flashdata using connect-flash
        //     } 

            UserHelper.getUserByName(username,  function(err,rows){
            	if (err)
                    return done(err);
            	 if (!rows.length) {
                    return done(null, false, "User not found"); // req.flash is the way to set flashdata using connect-flash
                }

            // if the user is found but the password is wrong
            if (!( rows[0].Password == password))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
			
            // all is well, return successful user
            return done(null, rows[0]);	
            });
			


    }));

};