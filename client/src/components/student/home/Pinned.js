import React from 'react'
//this component displays lessons that the student pinned
function PinnedLessons(props) {
    return (
        <div className="containers">
            <h5>Pinned Lessons</h5>
            {props.lessons.map((lesson, index) => {
                if (lesson.pinned) {
                    return (
                        <div key={index}>
                            {lesson.Topic}
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default PinnedLessons;