import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Section from './section'
import Toolbox from '../toolbox/Toolbox'
import Form from '../toolbox/form/Form'

class Lesson extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: {
                // elementAdding: false,
                // currentButton: '',
                currentSection: undefined,
                currentContent: undefined
            },

            title: "Lesson Title",
            sections: [
                {
                    header: "INTRO",
                    headerEditable: false,
                    contents: [//array of customElem
                        {
                            editable: false,
                            type: "paragraph",
                            text: "Back in the day, when real programmers wrote in FORTRAN, people had little need to send data between different computers (after all, there really weren't that many of them!). As computers became more affordable and increased in number, the need for them to be able to communicate with one another grew. Ethernet was invented in the early 1970's to allow computers to communicate easily, and quickly became standardized, meaning virtually all computers knew how to speak to one another using its special language, also known as a protocol."
                        },
                        {
                            editable: false,
                            type: "paragraph",
                            text: "With the rise of the Internet, the desire for a way to ease communication between computers grew accordingly. New protocols were invented to allow this, and today virtually all computers know how to communicate using them."
                        },
                        {
                            editable: false,
                            type: "paragraph",
                            text: "Even though we now have these special, low-level protocols that computers use to communicate, reading, writing, and coding them as humans takes a lot of mental effort, and can be very error-prone! Instead, people have designed different formats over the years (like Telnet, SOAP XML and HTML) to make the messages that computers send one another easier to read, write, and manipulate for us humans."
                        },
                        {
                            editable: false,
                            type: "paragraph",
                            text: "This lesson is all about JSON, one of the reigning champions (if not the reigning champion) of all high-level data formats."
                        }]
                },
                {
                    header: "WHAT IS JSON?",
                    headerEditable: false,
                    contents: [
                        {
                            editable: false,
                            type: "paragraph",
                            text: "JSON stands for JavaScript Object Notation, and looks like this:"
                        },
                        {
                            editable: false,
                            type: "code",
                            text: `{
                                "hello": "world"
                              }`
                        }]
                },
                {
                    header: "DOUBLE-TAKE",
                    headerEditable: false,
                    contents: [
                        {
                            editable: false,
                            type: "paragraph",
                            text: "This should all look familiar. Maybe a little bit too familiar..."
                        },
                        {
                            editable: false,
                            type: "paragraph",
                            text: "That's a good thing!"
                        },
                        {
                            editable: false,
                            type: "paragraph",
                            text: "JSON, happily enough, was directly inspired by JavaScript's syntax for creating objects! It's what you'd call a proper subset of JavaScript. It is made up of some, but not all, of JavaScript's syntax and data structures. This means that all JSON is valid JavaScript, but not all JavaScript is valid JSON."
                        }]
                },
                {
                    header: "EXERCISE",
                    headerEditable: false,
                    contents: [
                        {
                            editable: false,
                            type: "paragraph",
                            text: "Read the first few paragraphs found on http://json.org, up to the point where the diagrams start."
                        },
                        {
                            editable: false,
                            type: "paragraph",
                            text: `What does 'language independent' mean? \n
                            Why would it be important for JSON to be language-independent? \n
                            Think of some ways language-independence helps you, the programmer. \n
                            Bonus Question: What do the diagrams mean? How do you read them? Why are they useful?`
                        }]
                },
                {
                    header: "RULES OF THE ROAD",
                    headerEditable: false,
                    contents: [
                        {
                            editable: false,
                            type: "paragraph",
                            text: "There are a few simple rules about JSON that makes writing it slightly more 'strict' than writing raw JavaScript objects."
                        },
                        {
                            editable: false,
                            type: "paragraph",
                            text: `1. Single quotes (i.e. ') can't be used to surround strings or keys; only double quotes (i.e. ") are allowed.`
                        },
                        {
                            editable: false,
                            type: "paragraph",
                            text: "Good"
                        },
                        {
                            editable: false,
                            type: "code",
                            text: `{ "hello": "world" }`
                        },
                        {
                            editable: false,
                            type: "paragraph",
                            text: "Bad"
                        },
                        {
                            editable: false,
                            type: "code",
                            text: `{
                                "uh": 'oh',
                                'super': "bad"
                               }`
                        }]
                }
            ]
        }
        this.addSection = this.addSection.bind(this);
        this.editContent = this.editContent.bind(this);
        // this.toggleElementAdding = this.toggleElementAdding.bind(this);
        this.toggleEditing = this.toggleEditing.bind(this);
        this.selectHighlight = this.selectHighlight.bind(this);
        this.addContent = this.addContent.bind(this);
        this.changeContentType = this.changeContentType.bind(this);
        this.removeSelected = this.removeSelected.bind(this);
        this.repositionSelected = this.repositionSelected.bind(this);
    }

    addSection() {
        if (this.state.status.currentSection === undefined) {
            return;
        }
        let newSection = {
            header: 'Sample Header',
            headerEditable: false,
            contents: []
        }
        this.setState((prevState) => {
            return {
            [prevState.sections]:
                prevState.sections.splice(this.state.status.currentSection + 1, 0, newSection)
            }
        });
        this.setState((prevState) => { return { [prevState.status.currentSection]: prevState.status.currentSection += 1 } });
        this.setState((prevState) => { return { [prevState.status.currentContent]: prevState.status.currentContent = undefined } });
    }

    addContent() {
        if (this.state.status.currentSection === undefined) {
            return;
        }
        let newContent = {
            editable: false,
            type: "paragraph",
            text: "Sample Content"
        }
        this.setState((prevState) => {
            return {
            [prevState.sections[this.state.status.currentSection]]:
                prevState.sections[this.state.status.currentSection].contents.splice(this.state.status.currentContent + 1, 0, newContent)
            }
        });
        this.setState((prevState) => { return { [prevState.status.currentContent]: prevState.status.currentContent += 1 } });
    }

    removeSelected() {
        if (this.state.status.currentSection === undefined) {
            return;
        }
        else if (this.state.status.currentContent === undefined) {
            this.setState((prevState) => {
                return {
                [prevState.sections]:
                    prevState.sections.splice(this.state.status.currentSection, 1)
                }
            });
        }
        else {
            this.setState((prevState) => {
                return {
                [prevState.sections[this.state.status.currentSection]]:
                    prevState.sections[this.state.status.currentSection].contents.splice(this.state.status.currentContent, 1)
                }
            });
        }
    }

    changeContentType(newType) {
        if (this.state.status.currentContent === undefined || this.state.status.currentSection === undefined) {
            return;
        }
        this.setState((prevState) => {
            return {
            [prevState.sections[this.state.status.currentSection]]:
                prevState.sections[this.state.status.currentSection].contents[this.state.status.currentContent].type = newType
            }
        });
    }

    editContent(newText, sectionIndex, contentIndex) {
        if (contentIndex >= 0) {
            this.setState((prevState) => { return { [prevState.sections[sectionIndex]]: prevState.sections[sectionIndex].contents[contentIndex].text = newText } })
        }
        else if (sectionIndex >= 0) {
            this.setState((prevState) => { return { [prevState.sections[sectionIndex]]: prevState.sections[sectionIndex].header = newText } })
        }
        this.toggleEditing(sectionIndex, contentIndex);
    }

    selectHighlight(sectionIndex, contentIndex) {
        this.setState((prevState) => { return { [prevState.status.currentSection]: prevState.status.currentSection = sectionIndex } });
        this.setState((prevState) => { return { [prevState.status.currentContent]: prevState.status.currentContent = contentIndex } });
    }

    repositionSelected(direction) {
        let directionInt = (direction === 'up' ? -1 : (direction === 'down' ? 1 : 0));
        if (this.state.status.currentSection === undefined) {
            return;
        }
        else if (this.state.status.currentContent === undefined) {
            if (this.state.status.currentSection + directionInt >= this.state.sections.length || this.state.status.currentSection + directionInt < 0) {
                return;
            }
            let lowerIndex = Math.min(this.state.status.currentSection + directionInt, this.state.status.currentSection);
            let upperIndex = Math.max(this.state.status.currentSection + directionInt, this.state.status.currentSection);
            this.setState((prevState) => {
                return {
                [prevState.sections]:
                    prevState.sections.splice(lowerIndex, 2, this.state.sections[upperIndex], this.state.sections[lowerIndex])
                }
            });
            this.setState((prevState) => { return { [prevState.status.currentSection]: prevState.status.currentSection = 
                (direction === 'up' ? lowerIndex : (direction === 'down' ? upperIndex : prevState.status.currentSection)) } });
        }
        else {
            if (this.state.status.currentContent + directionInt >= this.state.sections[this.state.status.currentSection].contents.length || this.state.status.currentContent + directionInt < 0) {
                return;
            }
            let lowerIndex = Math.min(this.state.status.currentContent + directionInt, this.state.status.currentContent);
            let upperIndex = Math.max(this.state.status.currentContent + directionInt, this.state.status.currentContent);
            this.setState((prevState) => {
                return {
                [prevState.sections[this.state.status.currentSection]]:
                    prevState.sections[this.state.status.currentSection].contents
                    .splice(lowerIndex, 2, this.state.sections[this.state.status.currentSection].contents[upperIndex], 
                        this.state.sections[this.state.status.currentSection].contents[lowerIndex])
                }
            });
            this.setState((prevState) => { return { [prevState.status.currentContent]: prevState.status.currentContent = 
                (direction === 'up' ? lowerIndex : (direction === 'down' ? upperIndex : prevState.status.currentContent)) } });
        }
    }

    toggleEditing(sectionIndex, contentIndex) {
        if (contentIndex >= 0) {
            let contentEditable = this.state.sections[sectionIndex].contents[contentIndex].editable;
            this.setState((prevState) => { return { [prevState.sections[sectionIndex]]: prevState.sections[sectionIndex].contents[contentIndex].editable = !contentEditable } })
        }
        else if (sectionIndex >= 0) {
            let sectionEditable = this.state.sections[sectionIndex].headerEditable;
            this.setState((prevState) => { return { [prevState.sections[sectionIndex]]: prevState.sections[sectionIndex].headerEditable = !sectionEditable } })
        }
    }

    // toggleElementAdding(buttonLabel) {
    //     this.setState({ [status.elementAdding]: !this.state.status.elementAdding });
    //     if (buttonLabel) {
    //         this.setState({ [status.currentButton]: buttonLabel.target.innerHTML });
    //     }
    // }

    componentWillMount() {
        //reeive db stuff
    }

    render() {
        var displaySections = this.state.sections.map((section, index) => {
            return <Section
                key={index} section={section} sectionIndex={index} toggleEditing={this.toggleEditing}
                editContent={this.editContent} status={this.state.status} selectHighlight={this.selectHighlight}
            ></Section>
        })
        // let formHtml = <Form toggleNew={this.toggleElementAdding} addElement={this.addSection} />;
        // let form = (this.state.status.elementAdding ? formHtml : '');
        return (
            <div className="lesson-container">
                <h1>{this.state.title}</h1>
                <Link to='/lessons'>Back To Lessons</Link>
                {displaySections}

                <Toolbox addSection={this.addSection} addContent={this.addContent}
                    changeContentType={this.changeContentType} removeSelected={this.removeSelected} repositionSelected={this.repositionSelected} />
                {/* {form} */}
            </div>
        )
    }
}

export default Lesson