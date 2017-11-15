import React, { Component } from 'react';
import CustomElement from './CustomElement';
import Form from './toolbox/form/Form';
import './section.css'

class Section extends Component {

    header() {
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
            return <CustomElement
                key={index} status={this.props.status}
                toggleEditing={() => this.props.toggleEditing(this.props.sectionIndex, index)}
                type={content.contentType} text={content.contentText} editContent={this.props.editContent}
                sectionIndex={this.props.sectionIndex} contentIndex={index}
                selectHighlight={() => this.props.selectHighlight(this.props.sectionIndex, index)}
            ></CustomElement>
        })

        return (
            <div className='section'>
                {this.header()}
                {displayContent}
                <hr />
            </div>
        )
    }
}

export default Section