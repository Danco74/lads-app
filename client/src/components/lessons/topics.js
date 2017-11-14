import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'


class Topics extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div className="topicsContainer col-sm-3" >
                <div className="topicBox">
                    <h1 className="topicsHead">{this.props.topicName}</h1>
                    {this.props.topics.map((topic, index) =>
                        <div key={index} className="topicsList">
                            <a href="#">
                                {topic}
                            </a>
                        </div>)}
                </div>
            </div>
        )
    }
};


export default Topics