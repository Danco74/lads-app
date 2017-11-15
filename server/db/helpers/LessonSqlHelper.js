var db = require('../dbconnection');

var LessonSqlHelper = {

    //Add a lesson
    addLesson: function (lesson, callback) {
        // return db.query("Insert into lessons setvalues(?,?,?,?,?)", [
         return db.query("Insert into lessons set Topic=?,Description=?,LogoUrl=?,WeekNumber=?,DayNumber=?", [
            lesson.topic, lesson.description, lesson.logourl, lesson.weeknumber, lesson.daynumber
        ], callback);
    },
    //Get all lessons
    getAllLessons: function (callback) {
        return db.query("Select * from lessons", callback);
    },
    //Get lessons by id
    // getLessonById: function (id, callback) {

    //     return db.query("select * from lessons where Id=?", [id], callback);
    // },
    getLessonById: function (id, callback) {  
         return db.query("select lessons.id as lessonId,lessons.Topic as topic,lessons.Title as title,lessons.LogoUrl as logoUrl,lessons.WeekNumber as weekNumber,lessons.DayNumber as dayNumber,sections.id as sectionId,sections.Header sectionHeader,sections.ViewIndex as sectionViewIndex,content.id as contentId,content.Type as contentType,content.ViewIndex as contentViewIndex, content.text as contentText from lessons INNER JOIN sections ON sections.LessonId=lessons.id LEFT JOIN content ON content.SectionId=sections.id", [id], callback);
    },

    //Get lessons by week
    getLessonsByWeek: function (weekNumber, callback) {

        return db.query("select * from lessons where WeekNumber=?", [weekNumber], callback);
    },
    //Get lessons by topic
    getLessonsByTopic: function (topicName, callback) {
        
        return db.query("select * from lessons where Topic=?", [topicName], callback);
    },
    //delete lesson by id
    deleteLesson: function (id, callback) {
        return db.query("delete from lesson where Id=?", [id], callback);
    },
    //updaate lesson
    updateLesson: function (id, lesson, callback) {
        return db.query("update task set Topic=?,Description=?,LogoUrl=? where Id=?", [
            lesson.name, lesson.description, lesson.logoUrl
        ], callback);
    }

};
module.exports = LessonSqlHelper;