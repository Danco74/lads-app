const express = require('express');
const LessonHelper = require('../db/helpers/LessonSqlHelper.js');
const SectionHelper = require('../db/helpers/SectionSqlHelper.js');
const ContentHelper = require('../db/helpers/ContentSqlHelper.js');
const router = express.Router();

// #LESSONS ROUTES #------------------------------------------------------- Add
// a new lesson
router.post('/', function (req, res) {
    LessonHelper
        .addLesson(req.body, function (err, rows) {
            if (err) {
                res.send(err);
            } else {
                res.send(rows);
            }

        });
})
// get all lessons
router.get('/', function (req, res) {
    LessonHelper
        .getAllLessons(function (err, rows) {
            if (err) {
                res.send(err);
            } else {
                res.send(rows);
            }

        });
})
// get lesson by id
router.get('/:id', function (req, res) {
    LessonHelper
        .getLessonById(req.params.id, function (err, rows) {

            if (err) {
                res.send(err);
            } else if (!rows) {
                res.send("Empty results");
            } else {
                var getSectionIndex = function (id) {
                    for (let i = 0; i < sections.length; i++) {
                        if (sections[i].sectionId == id) {
                            return i;
                        } else {
                            return -1;
                        }
                    }
                };

                var lesson = {};

                lesson.title = rows[0].title;

                var sections = [];

                for (let i = 0; i < rows.length; i++) {
                    var section = {
                        sectionId: rows[i].sectionId,
                        sectionHeader: rows[i].sectionHeader,
                        sectionViewIndex: rows[i].sectionViewIndex,
                        content: []
                    }

                    if (getSectionIndex(rows[i].sectionId) != -1) {
                        sections.push(section)
                    }
                }

                for (let i = 0; i < rows.length; i++) {

                    var content = {
                        contentId: rows[i].contentId,
                        contentType: rows[i].contentType,
                        contentViewIndex: rows[i].contentViewIndex,
                        contentText: rows[i].contentText
                    }

                    sections[getSectionIndex(rows[i].sectionId)]
                        .content
                        .push(content);
                }

                lesson.sections = sections;

                res.send(lesson);
            }

        });
})
//get lesson by week number
router.get('/:weekNumber', function (req, res) {
    LessonHelper
        .getLessonById(req.params.id, function (err, rows) {
            if (err) {
                res.send(err);
            } else {
                res.send(rows);
            }

        });

})

//get all lesson gathered by week with sorted days
router.get('/sorted/byweeks', function (req, res) {

    LessonHelper
        .getAllLessons(function (err, rows) {
            if (err) {
                res.send(err);
            } else {

                let weeks = {};
                for (let i = 0; i < rows.length; i++) {
                    if (!weeks[rows[i].WeekNumber]) {
                        weeks[rows[i].WeekNumber] = {};
                    }

                    if (!weeks[rows[i].WeekNumber][rows[i].DayNumber]) {
                        weeks[rows[i].WeekNumber][rows[i].DayNumber] = [];
                    }

                    weeks[rows[i].WeekNumber][rows[i].DayNumber].push(rows[i]);
                }

                // for (var key in weeks){     weeks[key].sort(function(a, b){ if(a.DayNumber <
                // b.DayNumber) return -1;         if(a.DayNumber > b.DayNumber) return 1;
                //   return 0;     }); }

                res.send(weeks);
            }

        });
})

router.get('/sorted/bytopic', function (req, res) {

    LessonHelper
        .getAllLessons(function (err, rows) {
            if (err) {
                res.send(err);
            } else {

                let topics = {};
                for (let i = 0; i < rows.length; i++) {
                    if (!topics[rows[i].Topic]) {
                        topics[rows[i].Topic] = {
                            lessons: []
                        };
                    }

                    topics[rows[i].Topic]
                        .lessons
                        .push(rows[i]);
                }

                res.send(topics);
            }

        });
})

//get lesson by day number
router.get('/:dayNumber', function (req, res) {
    LessonHelper
        .getLessonByDay(req.params.dayNumber, function (err, rows) {
            if (err) {
                res.send(err);
            } else {
                res.send(rows);
            }

        });
})

//get lesson by topic name
router.get('/:topicId', function (req, res) {
    LessonHelper
        .getLessonByTopicId(req.params.topicId, function (err, rows) {
            if (err) {
                res.send(err);
            } else {
                res.send(rows);
            }

        });
})

//######Section routes######## ------------------------------- Add section
router.post('/:lessonId/sections', function (req, res) {
    SectionHelper
        .addSection(req.params.lessonId, req.body, function (err, rows) {
            if (err) {
                res.send(err);
            } else {
                res.send(rows);
            }

        });
})
// get all sections
router.get('/sections', function (req, res) {
    SectionHelper
        .getAllSections(function (err, rows) {
            if (err) {
                res.send(err);
            } else {
                res.send(rows);
            }

        });
})
// get section by lesson id
router.get('/:lessonId/sections', function (req, res) {
    SectionHelper
        .getSectionsByLessonId(req.params.lessonId, function (err, rows) {
            if (err) {
                res.send(err);
            } else {
                res.send(rows);
            }

        });
})
// get section by id
router.get('/sections/:sectionId', function (req, res) {
    SectionHelper
        .getSectionById(req.params.sectionId, function (err, rows) {
            if (err) {
                res.send(err);
            } else {
                res.send(rows);
            }

        });
})
//delete section by id
router.delete('/sections/:sectionId', function (req, res) {

    SectionHelper
        .deleteSection(req.params.sectionId, function (err, rows) {
            if (err) {
                res.send(err);
            } else {
                res.send(rows);
            }

        });
})
//update section by id
router.put('/sections/:sectionId', function (req, res) {
    SectionHelper
        .updateSection(req.params.sectionId, req.body, function (err, rows) {
            if (err) {
                res.send(err);
            } else {
                res.send(rows);
            }

        });
})

//######Content routes######## ------------------------------- Add new content
router.post('/:lessonId/sections/:sectionId/content', function (req, res) {
    ContentHelper
        .addContent(req.params.lessonId, req.params.sectionId, req.body, function (err, rows) {
            if (err) {
                res.send(err);
            } else {
                res.send(rows);
            }

        });
})
//Get all content
router.get('/content', function (req, res) {
    ContentHelper
        .getAllContent(function (err, rows) {
            if (err) {
                res.send(err);
            } else {
                res.send(rows);
            }

        });
})
//Get content by section id
router.get('/sections/:sectionId/content', function (req, res) {
    ContentHelper
        .getContentBySectionId(req.params.sectionId, function (err, rows) {
            if (err) {
                res.send(err);
            } else {
                res.send(rows);
            }

        });
})
// get all content by id
router.get('/content/:contentId', function (req, res) {
    ContentHelper
        .getContentById(req.params.contentId, function (err, rows) {
            if (err) {
                res.send(err);
            } else {
                res.send(rows);
            }

        });
})
// delete content by id
router.delete('/content/:contentId', function (req, res) {
    ContentHelper
        .deleteContent(req.params.contentId, function (err, rows) {
            if (err) {
                res.send(err);
            } else {
                res.send(rows);
            }

        });
})
// delete content by sectionId
router.delete('/section/:sectionId/content', function (req, res) {
    ContentHelper
        .deleteContentBySectionId(req.params.contentId, function (err, rows) {
            if (err) {
                res.send(err);
            } else {
                res.send(rows);
            }

        });
})
//Update content by id
router.put('/content/:contentId', function (req, res) {
    ContentHelper
        .updateContent(req.params.contentId, req.body, function (err, rows) {
            if (err) {
                res.send(err);
            } else {
                res.send(rows);
            }

        });
})

module.exports = router
