import React from 'react'
import './pinned.css'
//this component displays lessons that the student pinned
function PinnedLessons(props) {
    return (
        <div className="pn-wrapper">
            {props.pinned.map((pinned, index) => {
                return (
                    <div key={index} className="pn-block">
                        <h1 className="pn-topic"> <a className="link" href="#"> {pinned.Topic.toUpperCase()} </a></h1>
                        <img className="pn-logo" src={`${pinned.logo}`}/>
                        <div className="pn-week"> WEEK: {pinned.dayNumber}</div>
                        <div className="pn-day"> DAY: {pinned.dayNumber}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default PinnedLessons;