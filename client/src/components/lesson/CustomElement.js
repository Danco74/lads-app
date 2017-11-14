import React, { Component } from 'react';
import Form from './toolbox/form/Form'

//const Code = (props) => (<code className={props.type}>Type:Code ||Text: {props.text}</code>)

// const Paragraph = (props) => (<p onClick={()=>alert('hi')} className={props.type}>Type: Paragraph || Text: {props.text}</p>)

class CustomElement extends Component {
    // componentWillReceiveProps() {
    //     this.selectType()
    // }

    isSelected() {
        return ((this.props.status.currentSection === this.props.sectionIndex && this.props.status.currentContent === this.props.contentIndex) ? 'selected' : '')
    }

    selectType() {
        if (this.props.editing) {
            return <Form text={this.props.text} editContent={this.props.editContent} sectionIndex={this.props.sectionIndex} contentIndex={this.props.contentIndex} />
        }
        switch (this.props.type) {
            case "paragraph":
                return <p onClick={this.props.selectHighlight} onDoubleClick={this.props.toggleEditing} className={`${this.props.type} ${this.isSelected()}`}>
                    {this.props.text}
                </p>;
            case "code":
                return <code onClick={this.props.selectHighlight} onDoubleClick={this.props.toggleEditing} className={`${this.props.type} ${this.isSelected()}`}>
                    {this.props.text}
                </code>;
        }
    }
    render() {
        return (
            <div className="content-container">
                {this.selectType()}
            </div>
        )
    }
}
export default CustomElement;