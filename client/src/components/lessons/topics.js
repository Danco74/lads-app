import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './topics.css'


class Topics extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="topic-wrapper">
                <h1 className="topicsHead">{this.props.topicName}</h1>
                {this.props.lessons.map((lesson, index) =>
                    <div key={index}>
                        {/* <Link to={`${this.props.routeprops.match.url}/${lesson.Title}`}> */}
                            <a className="subtopic">
                                {lesson.Title}
                            </a>
                        {/* </Link> */}
                    </div>)}
            </div>

        )
    }
};


export default Topics