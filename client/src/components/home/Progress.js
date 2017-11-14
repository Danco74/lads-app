import React from 'react'

//this component shows the five most recent lessons that you have yet completed and your progress in them 
function Progress(props) {

    return (
        <div className="containers">
            <h5>Completion Rating</h5>
            {/* {props.inProgress.map((lesson, index) => {
                return (
                    <div key={index}>
                        Topic:{lesson.Topic} || Day: {lesson.dayNumber}
                        <div className="progress">
                            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: `${lesson.completion}%` }} aria-valuemin="0" aria-valuemax="100">{lesson.completion}%</div>
                        </div>
                    </div>
                )
                }) */}
            }


            
        </div>
    )

}

export default Progress;