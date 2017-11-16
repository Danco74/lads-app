var db = require('../dbconnection');

var SectionSqlHelper = {
    //Add section
    addSection: function (lessonId, section, callback) {
        return db.query("Insert into sections set Header=?,LessonId=?,ViewIndex=?", [
            // section.header, lessonId, section.index
            section.header,1,1
        ], callback);
    },
    //Get all sections
    getAllSections: function (callback) {

        return db.query("Select * from sections", callback);

    },
    //Get section by lesson id
    getSectionsByLessonId: function (lessonId, callback) {

        return db.query("Select * from sections where LessonId=?", [lessonId], callback);

    },
    //get section by id
    getSectionById: function (id, callback) {

        return db.query("select * from sections where Id=?", [id], callback);
    },
    //delete section by section id
    deleteSection: function (id, callback) {
        return db.query("delete from sections where Id=?", [id], callback);
    },
    //update section by id
    updateSection: function (id, section, callback) {
        return db.query("update sections set Header=? where Id=?", [
            section.header, id
        ], callback);
    }

};
module.exports = SectionSqlHelper;