import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './topics.css'


class Topics extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props)
        return (
           
                <div className="topic-wrapper">
                    <h1 className="topicsHead">{this.props.topicName.toUpperCase()}</h1>
                    {this.props.lessons.map((lesson, index) =>
                        <div key={index}>
                            <Link className="subtopic link" to={`/lads/lesson/lesson/${lesson.id}`}>
                                {lesson.Title}
                            </Link>
                            {/* </Link> */}
                        </div>)}
                </div>


        )
    }
};


export default Topics