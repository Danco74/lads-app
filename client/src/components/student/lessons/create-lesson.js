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
            <div className="createLessonForm">
                <button onClick={this.clickForm} type="button" className="btn btn-danger btn-lg">Create new Lesson</button>
                {this.state.showForm &&
                    <div className="form-group createLessonBox">
                        <input onChange={this.lessonVal} type="text" className="form-control" id="Topic" placeholder="Topic" />
                        <select onChange={this.lessonVal} className="form-control" id="WeekNumber">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>

                        <select onChange={this.lessonVal} className="form-control" id="DayNumber">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>

                        <button onClick={this.lessonToWeeks} type="button" className="btn btn-success">ADD</button>
                    </div>}

            </div>
        );
    };
};


export default CreateLesson;