import React, { Component } from 'react';
import CustomElement from './CustomElement'
import Form from './toolbox/form/Form'

class Section extends Component {

    header(){
        if(this.props.section.headerEditable) {
            return <div className='header'><Form text={this.props.section.header} editContent={this.props.editContent} sectionIndex={this.props.sectionIndex}/> </div>
        }
        let isSelected = ((this.props.status.currentSection === this.props.sectionIndex && this.props.status.currentContent === undefined) ? 'selected' : '')
        return (<h2 className={`header ${isSelected}`} onDoubleClick={()=>this.props.toggleEditing(this.props.sectionIndex)} onClick={()=>this.props.selectHighlight(this.props.sectionIndex)}>
                    {this.props.section.header}
                </h2>)
    }

    render() {
        var displayContent = this.props.section.contents.map((content, index) => {
            return <CustomElement 
                        key={index} editing={content.editable} status={this.props.status}
                        toggleEditing={()=>this.props.toggleEditing(this.props.sectionIndex, index)} 
                        type={content.type} text={content.text} editContent={this.props.editContent} 
                        sectionIndex={this.props.sectionIndex} contentIndex={index} 
                        selectHighlight={()=>this.props.selectHighlight(this.props.sectionIndex, index)}
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