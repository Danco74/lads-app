import React, { Component } from 'react';
import CustomElement from './CustomElement';
import Form from './toolbox/form/Form';
import './section.css'

class Section extends Component {

    header() {
        if(this.props.user.RoleId===0){ // student. teacher===1
            return (
            <div className={`lesson-section-header`}>
                <h2>
                    {this.props.section.header.trim() || '???'}
                </h2>
                <i className="student-completion fa fa-check-circle fa-3x" aria-hidden="true"></i>
            </div>)
        }
        if (this.props.status.currentSection === this.props.sectionIndex && this.props.status.currentContent === undefined && this.props.status.editing) {
            return (
                <div className='lesson-section-header'>
                    <Form text={this.props.section.header} editContent={this.props.editContent} sectionIndex={this.props.sectionIndex} />
                </div>)
        }
        let isSelected = ((this.props.status.currentSection === this.props.sectionIndex && this.props.status.currentContent === undefined) ? 'selected' : '')
        return (
            <div className={`lesson-section-header ${isSelected}`}>
                <h2 onClick={() => this.props.selectHighlight(this.props.sectionIndex)} onDoubleClick={() => this.props.toggleEditing(this.props.sectionIndex)}>
                    {this.props.section.header.trim() || '???'}
                </h2>
            </div>)
    }

    render() {
        var displayContent = this.props.section.contents.map((content, index) => {
            if(this.props.user.RoleId===0){ // student. teacher===1
                return (
                    <CustomElement
                key={index} user={this.props.user}
                type={content.type} text={content.text} 
            ></CustomElement>)
            }
            return <CustomElement
                key={index} status={this.props.status} user={this.props.user}
                toggleEditing={() => this.props.toggleEditing(this.props.sectionIndex, index)}
                type={content.type} text={content.text} editContent={this.props.editContent}
                sectionIndex={this.props.sectionIndex} contentIndex={index}
                selectHighlight={() => this.props.selectHighlight(this.props.sectionIndex, index)}
            ></CustomElement>
        })

        return (
            <div className='section'>
                <div className="section-header">
                    {this.header()}
                </div>
                {displayContent}
                <hr />
            </div>
        )
    }
}

export default Section