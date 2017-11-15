import React from 'react'
import './quote.css'
//this component displays the message of the day from the teacher

function Quote(props){
    return(
        <div className="daily-quote">"{props.quote.toUpperCase()}"</div>
    )
}

export default Quote;