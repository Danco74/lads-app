import React from 'react'
//this component displays the message of the day from the teacher

function Quote(props){
    return(
        <div id="quote">{props.quote.toUpperCase()}</div>
    )
}

export default Quote;