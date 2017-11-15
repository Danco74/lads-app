import React from 'react'
import './progress.css'

//this component shows the five most recent lessons that you have yet completed and your progress in them 
function Progress(props) {

    return (
        <div className="pg-block-wrapper">

            {props.inProgress.map((lesson, index) => {
                return (
                    <div key={index} className="pg-block">
                        <h1 className="pg-topic"> <img className="pg-logo" src={`${lesson.logo}`} />
                            <a className="link" href="#"> {lesson.Topic.toUpperCase()} </a>
                        </h1>
                        <div className="pg-completion"> {lesson.completion}% </div>
                        <div className="pg-week"> WEEK: {lesson.dayNumber}</div>
                        <div className="pg-day"> DAY: {lesson.dayNumber}</div>
                    </div>
                )
            })
            }
        </div>
    )

}

export default Progress;