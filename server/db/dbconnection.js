var mysql=require('mysql');
var connection=mysql.createPool({

host:'35.197.241.38',
user:'root',
password:'sF.z6hh8',
database:'lads'

});

module.exports=connection;


