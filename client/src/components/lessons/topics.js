import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './topics.css'


class Topics extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="topics-wrapper">
                <div className="topic-wrapper">
                    <h1 className="topicsHead">{this.props.topicName}</h1>
                    {this.props.lessons.map((lesson, index) =>
                        <div key={index}>
                            <Link className="subtopic" to={`/lads/lesson/lesson/${lesson.id}`}>
                                {lesson.Title}
                            </Link>
                            {/* </Link> */}
                        </div>)}
                </div>
            </div>

        )
    }
};


export default Topics