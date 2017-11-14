LessonHelper
.getLessonsByWeekNumber(req.params.weekNumber, function (err, rows) {

    if (err) {
        res.send(err);
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

        var sections = [];

        for (let i = 0; i < arr.length; i++) {
            var section = {
                sectionId: arr[i].sectionId,
                sectionHeader: arr[i].sectionHeader,
                sectionViewIndex: arr[i].sectionViewIndex,
                content: []
            }

            if (getSectionIndex(arr[i].sectionId) != -1) {
                sections.push(section)
            }
        }

        for (let i = 0; i < arr.length; i++) {

            var content = {
                contentId: arr[i].contentId,
                contentType: arr[i].contentType,
                contentViewIndex: arr[i].contentViewIndex,
                contentText: arr[i].contentText
            }

            sections[getSectionIndex(arr[i].sectionId)]
                .content
                .push(content);
        }

        lesson.sections = sections;

        res.send(lesson);
    }

});