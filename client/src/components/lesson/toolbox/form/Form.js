import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { input: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount(){
        this.nameInput.focus();
        // console.log(this.nameInput)
        // this.nameInput.setSelectionRange(0, 0);
    }

    handleChange(event) {
        this.setState({ input: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.editContent(this.state.input, this.props.sectionIndex, this.props.contentIndex);
        //this.props.toggleNew();
    }

    componentWillMount() {
        this.setState({ input: this.props.text });
    }

    handleKeyPress(event) {
        if(event.altKey && event.key === "Enter") {
            this.props.editContent(this.state.input, this.props.sectionIndex, this.props.contentIndex);
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <textarea ref={(textarea) => { this.nameInput = textarea; }} type='text' placeholder='Add text here' value={this.state.input} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>
                <input className='submit-button' type='submit' value='Save'/>
            </form>
        );
    }
}

export default Form;
