import React, { Component } from 'react';
import './Toolbox.css'
import Button from './button/Button'
import Form from './form/Form'

class Toolbox extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            //currentButton: ''
        }
        // this.toggleElementAdding = this.toggleElementAdding.bind(this);
 //       this.addLessonContent = this.addLessonContent.bind(this);
    }

    // toggleElementAdding(buttonLabel) {
    //     this.setState({ elementAdding: !this.state.elementAdding});
    //     if(buttonLabel) {
    //         this.props.toggleElementAdding(buttonLabel);
    //     }
    // }

    // addLessonContent(newText) {
    //     //let newElement = {tag: this.state.currentButton, text: newText};
    //     //this.setState({lessonContent:this.state.lessonContent.concat(newElement)});
    //     //this.setState((prevState)=>({lessonContent:prevState.lessonContent.concat(newElement)}))

    //     this.props.addSection(newText);        
    // }

    render() {
    // let formHtml = <Form toggleNew={this.toggleElementAdding} addElement={this.addLessonContent}/>;
    // let form = (this.state.elementAdding ? formHtml : '');
    //let lessonElements = this.state.lessonContent.map((item, index) => <div className='lesson-element' key={index}><item.tag>{item.text}</item.tag></div>)

        return (
            <div className="toolbox">
                <div className="btn-group">
                    <Button label='+S' customAction={this.props.addSection}/>
                    <Button label='+C' customAction={this.props.addContent}/>
                    <Button label='~p' customAction={()=>this.props.changeContentType('paragraph')}/>
                    <Button label='~code' customAction={()=>this.props.changeContentType('code')}/>
                    <Button label='-' customAction={this.props.removeSelected}/>
                    <Button label='^' customAction={()=>this.props.repositionSelected('up')}/>
                    <Button label='v' customAction={()=>this.props.repositionSelected('down')}/>
                    <Button label='' />
                    <Button label='~html' customAction={()=>this.props.changeContentType('html')}/>
                    <Button label={<i className="fa fa-floppy-o fa-2x" aria-hidden="true"></i>} />
                </div>
                {/* {lessonElements} */}
                {/* {form} */}
            </div>
        );
    }
}

export default Toolbox;
