import React from 'react'
import './pinned.css'
//this component displays lessons that the student pinned
function PinnedLessons(props) {
    return (
        <div className="pn-wrapper">
            {props.pinned.map((pinned, index) => {
                return (
                    <div key={index} className="pn-block">
                        <div className="pn-topic"> <a href="#"> {pinned.Topic} </a></div>
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