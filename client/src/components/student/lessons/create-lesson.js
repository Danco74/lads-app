import React, { Component } from 'react'


class CreateLesson extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showForm: false,
            id: "",
            Topic: "",
            Description: "",
            LogoUrl: "",
            WeekNumber: "",
            DayNumber: ""

            // "week": {
            //     "day": [
            //         {
            //             "Topic": ""
            //         }
            //     ]
            // }
        }

        this.clickForm = this.clickForm.bind(this)
        this.lessonVal = this.lessonVal.bind(this)
        this.lessonToWeeks = this.lessonToWeeks.bind(this)
    }

    clickForm() {
        this.setState({ showForm: !this.state.showForm })
    }

    lessonVal(e) {
        this.setState({ [e.target.id]: e.target.value });

        // console.log(this.state)
        //   console.log(this.state)
    }

    lessonToWeeks() {
        // console.log(this.state)
        this.props.addLesson(this.state)
        // console.log(this.state);
        // this.props.addLesson(this.state); 
        // console.log(this.state)
        // this.setState({ weeks: "" }); 
    }

    render() {
        return (
            <div>
                <button onClick={this.clickForm} type="button" className="btn btn-danger btn-lg">Create new Lesson</button>

                {this.state.showForm &&
                <div className="form-group createLessonBox">
                    <input onChange={this.lessonVal} type="text" className="form-control" id="Topic" placeholder="Topic" />
                    <input onChange={this.lessonVal} type="number" className="form-control" id="WeekNumber" placeholder="week" />
                    <input onChange={this.lessonVal} type="number" className="form-control" id="DayNumber" placeholder="day" />
                    <button onClick={this.lessonToWeeks} type="button" className="btn btn-info btn-lg form-control">ADD</button>
                </div>}

            </div>
        );
    };
};


export default CreateLesson;