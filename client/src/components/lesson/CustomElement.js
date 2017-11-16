import React, { Component } from 'react';
import Form from './toolbox/form/Form'

class CustomElement extends Component {

    selectType() {
        if (this.props.user.RoleId === 1) {
            if (this.props.status.currentSection === this.props.sectionIndex && this.props.status.currentContent === this.props.contentIndex && this.props.status.editing) {
                return <Form text={this.props.text} editContent={this.props.editContent} sectionIndex={this.props.sectionIndex} contentIndex={this.props.contentIndex} />
            }
        }
        let teacherSelect = (this.props.user.RoleId === 1 ? this.props.selectHighlight : '')
        let teacherEdit = (this.props.user.RoleId === 1 ? this.props.toggleEditing : '')
        switch (this.props.type) {
            case "paragraph":
                return (<p onClick={teacherSelect} onDoubleClick={teacherEdit} className={this.props.type}>
                    {this.props.text.trim() || "???"}
                </p>);
            case "code":
                return (<code onClick={this.props.selectHighlight} onDoubleClick={this.props.toggleEditing} className={this.props.type}>
                    {this.props.text.trim() || "???"}
                </code>);
            case "html":
                return (
                    <div onClick={this.props.selectHighlight} onDoubleClick={this.props.toggleEditing} className={this.props.type}
                        dangerouslySetInnerHTML={{ __html: this.props.text }} />);
        }
    }
    render() {
        if (this.props.user.RoleId === 0) {
            return (
                <div className={`content-container`}>
                    {this.selectType()}
                </div>
            )
        }

        let isSelected = ((this.props.status.currentSection === this.props.sectionIndex && this.props.status.currentContent === this.props.contentIndex) ? 'selected' : '')

        return (
            <div className={`content-container ${isSelected}`}>
                {this.selectType()}
            </div>
        )
    }
}
export default CustomElement;