var db = require('../dbconnection');

var ContentSqlHelper = {
    //Add content
    addContent: function (lessonId, sectionId, content, callback) {
        return db.query("Insert into content set Type=?,LessonId=?,SectionId=?,ViewIndex=?,Text=?", [
            content.type, lessonId, sectionId, content.viewIndex, content.text
        ], callback);
    },
    //Get all contents
    getAllContent: function (callback) {
        return db.query("Select * from content", callback);
    },
    //Get content by section id
    getContentBySectionId: function (sectionId, callback) {

        return db.query("Select * from content where sectionId=?", [sectionId], callback);

    },
    //get content by id
    getContentById: function (id, callback) {

        return db.query("select * from content where Id=?", [id], callback);
    },
    //delete content by content id
    delteContent: function (id, callback) {
        return db.query("delete from content where Id=?", [id], callback);
    },
    //delete content by section id
      delteContentBySectionId: function (sectionId, callback) {
        return db.query("delete from content where SectionId=?", [sectionId], callback);
    },
    //update content by id
    updateContent: function (contentId, content, callback) {
        return db.query("update task set Type=?,Text=?,ViewIndex=? where ContentId=?", [
            content.Type, content.Text, content.ViewIndex
        ], callback);
    }

};
module.exports = ContentSqlHelper;