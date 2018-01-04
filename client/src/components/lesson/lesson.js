import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Section from './section';
import Toolbox from './toolbox/Toolbox';
import Form from './toolbox/form/Form';
import axios from 'axios';
import './lesson.css';

class Lesson extends Component {
    constructor(props) {
        super(props)
        this.state = {
            status: {
                editing: false,
                currentSection: undefined,
                currentContent: undefined
            },

            title: "",
            sections: []
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
        this._handleKeyPress = this._handleKeyPress.bind(this);
    }

    addSection() {
        let newSection = {
            header: '',
            contents: [],
            viewIndex: (this.state.status.currentSection >=0 ? this.state.status.currentSection : 0 )
        }
        // /:lessonId/sections
        let tempArray = this.props.match.pathname.split('/');
        var url = `./api/lessons/${tempArray[tempArray.length-1]}/sections`

        axios.post(url, newSection) //<==Calling axios with a get request and pass the url
            .then(response => {
                //Use the response here to update
                console.log(response)
                if (!response.data.affectedRows || response.data.affectedRows === 0) {
                    console.log('Nothing changed in the DB')
                    return;
                }
                newSection.sectionId = response.data.insertId;                
                if (this.state.status.currentSection === undefined) {
                    this.setState((prevState) => {
                        return {
                            [prevState.sections]:
                            prevState.sections.splice(0, 0, newSection)
                        }
                    });
                    this.setState((prevState) => { return { [prevState.status.currentSection]: prevState.status.currentSection = 0 } });
                    this.setState((prevState) => { return { [prevState.status.currentContent]: prevState.status.currentContent = undefined } });
                }
                else {
                    this.setState((prevState) => {
                        return {
                            [prevState.sections]:
                            prevState.sections.splice(this.state.status.currentSection + 1, 0, newSection)
                        }
                    });
                    this.setState((prevState) => { return { [prevState.status.currentSection]: prevState.status.currentSection += 1 } });
                    this.setState((prevState) => { return { [prevState.status.currentContent]: prevState.status.currentContent = undefined } });
                }
                console.log(this.state)
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    addContent() {
        if (this.state.status.currentSection === undefined) {
            return;
        }

        let newContent = {
            type: "paragraph",
            text: "",
            viewIndex: (this.state.status.currentContent === undefined ? 0 : this.state.status.currentContent + 1)
        }

        // /:lessonId/sections/:sectionId/content
        let tempArray = this.props.match.pathname.split('/');
        var url = `./api/lessons/${tempArray[tempArray.length-1]}/sections/${this.state.sections[this.state.status.currentSection].sectionId}/content`

        axios.post(url, newContent) //<==Calling axios with a get request and pass the url
            .then(response => {
                //Use the response here to update
                console.log(response)
                if (!response.data.affectedRows || response.data.affectedRows === 0) {
                    console.log('Nothing changed in the DB')
                    return;
                }
                newContent.contentId = response.data.insertId;                
                this.setState((prevState) => {
                    return {
                        [prevState.sections[prevState.status.currentSection]]:
                        prevState.sections[prevState.status.currentSection].contents.splice(this.state.status.currentContent + 1, 0, newContent)
                    }
                });
                this.setState((prevState) => { return { [prevState.status.currentContent]: (prevState.status.currentContent === undefined ? prevState.status.currentContent = 0 : prevState.status.currentContent += 1) } });
                console.log(this.state)
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    removeSelected() {
        if (this.state.status.currentSection === undefined) {
            return;
        }
        else if (this.state.status.currentContent === undefined) {
            // /sections/:sectionId
            var url = `./api/lessons/sections/${this.state.sections[this.state.status.currentSection].sectionId}`

            axios.delete(url)
                .then(response => {
                    console.log(response)
                    if (!response.data.affectedRows || response.data.affectedRows === 0) {
                        console.log('Nothing changed in the DB')
                        return;
                    }
                    this.setState((prevState) => {
                        return {
                            [prevState.sections]:
                            prevState.sections.splice(this.state.status.currentSection, 1)
                        }
                    });
                })
                .catch(error => {
                    console.log('Error fetching and parsing data', error);
                });
        }
        else {
            // /content/:contentId
            var url = `./api/lessons/content/${this.state.sections[this.state.status.currentSection].contents[this.state.status.currentContent].contentId}`

            axios.delete(url)
                .then(response => {
                    console.log(response)
                    if (!response.data.affectedRows || response.data.affectedRows === 0) {
                        console.log('Nothing changed in the DB')
                        return;
                    }
                    this.setState((prevState) => {
                        return {
                            [prevState.sections[this.state.status.currentSection]]:
                            prevState.sections[this.state.status.currentSection].contents.splice(this.state.status.currentContent, 1)
                        }
                    });
                })
                .catch(error => {
                    console.log('Error fetching and parsing data', error);
                });
        }
    }

    changeContentType(newType) {
        if (this.state.status.currentContent === undefined || this.state.status.currentSection === undefined) {
            return;
        }

        // /content/:contentId
        var url = `./api/lessons/content/${this.state.sections[this.state.status.currentSection].contents[this.state.status.currentContent].contentId}`
        let newContent = Object.assign({}, this.state.sections[this.state.status.currentSection].contents[this.state.status.currentContent]);
        newContent.type = newType;
        console.log(newContent);
        axios.put(url, newContent)
            .then(response => {
                console.log(response)
                if (!response.data.affectedRows || response.data.affectedRows === 0) {
                    console.log('Nothing changed in the DB')
                    return;
                }
                this.setState((prevState) => {
                    return {
                        [prevState.sections[this.state.status.currentSection]]:
                        prevState.sections[this.state.status.currentSection].contents[this.state.status.currentContent].type = newType
                    }
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    editContent(newText, sectionIndex, contentIndex) {
        if (contentIndex >= 0) {
            // /content/:contentId
            var url = `./api/lessons/content/${this.state.sections[this.state.status.currentSection].contents[this.state.status.currentContent].contentId}`
            let newContent = Object.assign({}, this.state.sections[sectionIndex].contents[contentIndex]);
            newContent.text = newText;
            console.log(newContent);
            axios.put(url, newContent)
                .then(response => {
                    console.log(response)
                    if (!response.data.affectedRows || response.data.affectedRows === 0) {
                        console.log('Nothing changed in the DB')
                        return;
                    }
                    this.setState((prevState) => { return { [prevState.sections[sectionIndex]]: prevState.sections[sectionIndex].contents[contentIndex].text = newText } })
                })
                .catch(error => {
                    console.log('Error fetching and parsing data', error);
                });
        }
        else if (sectionIndex >= 0) {
            // /sections/:sectionId
            var url = `./api/lessons/sections/${this.state.sections[this.state.status.currentSection].sectionId}`
            let newContent = Object.assign({}, this.state.sections[sectionIndex]);
            newContent.header = newText;
            console.log(newContent);
            axios.put(url, newContent)
                .then(response => {
                    console.log(response)
                    if (!response.data.affectedRows || response.data.affectedRows === 0) {
                        console.log('Nothing changed in the DB')
                        return;
                    }
                    this.setState((prevState) => { return { [prevState.sections[sectionIndex]]: prevState.sections[sectionIndex].header = newText } })
                })
                .catch(error => {
                    console.log('Error fetching and parsing data', error);
                });
        }

        else {
            // /:id/title
            let newLessonStatus = {
                topic: "",
                title: newText,
                logoUrl: "",
                description: ""
            }
            let tempArray = this.props.match.pathname.split('/');
            var url = `./api/lessons/${tempArray[tempArray.length-1]}/title`
            
            axios.put(url, newLessonStatus)
            .then(response => {
                console.log(response)
                if (!response.data.affectedRows || response.data.affectedRows === 0) {
                    console.log('Nothing changed in the DB')
                    return;
                }
                this.setState((prevState) => { return { [prevState.title]: prevState.title = newText } })
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
        }
        this.toggleEditing(sectionIndex, contentIndex);
    }

    selectHighlight(sectionIndex, contentIndex) {
        if (this.state.status.editing) {
            return;
        }
        if (sectionIndex < 0) {
            sectionIndex = undefined;
        }
        if (contentIndex < 0) {
            contentIndex = undefined;
        }
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
            this.setState((prevState) => {
                return {
                    [prevState.status.currentSection]: prevState.status.currentSection =
                    (direction === 'up' ? lowerIndex : (direction === 'down' ? upperIndex : prevState.status.currentSection))
                }
            });
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
            this.setState((prevState) => {
                return {
                    [prevState.status.currentContent]: prevState.status.currentContent =
                    (direction === 'up' ? lowerIndex : (direction === 'down' ? upperIndex : prevState.status.currentContent))
                }
            });
        }
    }

    toggleEditing(sectionIndex, contentIndex) {
        this.setState({ [this.state.status.editing]: this.state.status.editing = !this.state.status.editing });
        console.log(this.state.status.editing);
    }

    // toggleElementAdding(buttonLabel) {
    //     this.setState({ [status.elementAdding]: !this.state.status.elementAdding });
    //     if (buttonLabel) {
    //         this.setState({ [status.currentButton]: buttonLabel.target.innerHTML });
    //     }
    // }

    componentWillMount() {
        document.addEventListener("keydown", this._handleKeyPress, false);
    }

    componentDidMount() {
        //reeive db stuff
        let tempArray = this.props.match.pathname.split('/');
        var url = `./api/lessons/${tempArray[tempArray.length-1]}`

        axios.get(url) //<==Calling axios with a get request and pass the url
            .then(response => {
                //Use the response here to update
                console.log(response)
                response.data.status = { currentSection: undefined, currentContent: undefined, editable: false };
                this.setState(response.data);
                console.log(this.state)
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this._handleKeyPress, false);
    }

    _handleKeyPress(event) {
        console.log(event);
        if (this.state.status.editing) {
            return;
        }
        else if (event.altKey) {
            if (event.code === 'ArrowUp') {
                event.preventDefault();
                this.repositionSelected('up');
            }
            else if (event.code === 'ArrowDown') {
                event.preventDefault();
                this.repositionSelected('down');
            }
        }
        else if (!event.altKey) {
            if (event.code === 'Enter') {
                event.preventDefault();
                this.toggleEditing(this.state.status.currentSection, this.state.status.currentContent);
            }
            else if (event.code === 'ArrowUp') {
                event.preventDefault();
                if (this.state.status.currentSection === undefined) {
                    return;
                }
                else if (this.state.status.currentContent === undefined && this.state.status.currentSection === 0) {
                    this.selectHighlight();
                }
                else if (this.state.status.currentContent === undefined) {
                    let prevSectionIndex = this.state.status.currentSection - 1;
                    let prevContentIndex = (this.state.sections[prevSectionIndex].contents.length === 0 ? undefined : this.state.sections[prevSectionIndex].contents.length - 1);
                    this.selectHighlight(prevSectionIndex, prevContentIndex);
                }
                else {
                    this.selectHighlight(this.state.status.currentSection, this.state.status.currentContent - 1);
                }
            }
            else if (event.code === 'ArrowDown') {
                event.preventDefault();
                // no sections
                if (this.state.sections.length === 0) {
                    return;
                }
                // at title
                else if (this.state.status.currentSection === undefined) {
                    this.selectHighlight(0);
                }
                // check if next content exists when at header
                else if (this.state.status.currentContent === undefined && this.state.sections[this.state.status.currentSection].contents.length > 0) {
                    this.selectHighlight(this.state.status.currentSection, 0);
                }
                // check if next section exists when at header
                else if (this.state.status.currentContent === undefined && this.state.status.currentSection < this.state.sections.length - 1) {
                    this.selectHighlight(this.state.status.currentSection + 1);
                }
                // check if next content exists
                else if (this.state.status.currentContent < this.state.sections[this.state.status.currentSection].contents.length - 1) {
                    this.selectHighlight(this.state.status.currentSection, this.state.status.currentContent + 1);
                }
                // check if next section exists
                else if (this.state.status.currentSection < this.state.sections.length - 1) {
                    this.selectHighlight(this.state.status.currentSection + 1, undefined)
                }
            }
            console.log(this.state.status)
        }
    }

    title() {
        if(this.props.user.RoleId===0) {
            return (
                <div className={`lesson-title`}>
                    <h1>
                        {this.state.title.trim() || '???'}
                    </h1>
                </div> 
            )
        }
        if (this.state.status.currentSection === undefined && this.state.status.currentContent === undefined && this.state.status.editing === true) {
            return <Form text={this.state.title} editContent={this.editContent} sectionIndex={undefined} contentIndex={undefined} />
        }
        return <div className={`lesson-title ${this.state.status.currentSection === undefined && this.state.status.currentContent === undefined ? 'selected' : ''}`}>
            <h1 onClick={() => this.selectHighlight(undefined, undefined)} onDoubleClick={() => this.toggleEditing(undefined, undefined)}>
                {this.state.title.trim() || '???'}
            </h1>
        </div>
    }

    render() {
        var displaySections = this.state.sections.map((section, index) => {
            if(this.props.user.RoleId===0){ // student. teacher===1
                return <Section
                key={index} section={section} sectionIndex={index} 
                 status={this.state.status} user={this.props.user}></Section>
            }
            else{
                return <Section
                key={index} section={section} sectionIndex={index} toggleEditing={this.toggleEditing} user={this.props.user}
                editContent={this.editContent} status={this.state.status} selectHighlight={this.selectHighlight}></Section>
            }
           
        })

        let displayToolbox = (this.props.user.RoleId===0 ? '' : <Toolbox addSection={this.addSection} addContent={this.addContent}
                changeContentType={this.changeContentType} removeSelected={this.removeSelected} repositionSelected={this.repositionSelected} />)
        let displayStars = (this.props.user.RoleId===0 ? <div className='lesson-rating'><i className="fa-3x fa fa-star" aria-hidden="true"></i><i className="fa fa-star fa-3x" aria-hidden="true"></i><i className="fa fa-star fa-3x" aria-hidden="true"></i><i className="fa fa-star-o fa-3x" aria-hidden="true"></i><i className="fa fa-star-o fa-3x" aria-hidden="true"></i></div> : '')

        // let formHtml = <Form toggleNew={this.toggleElementAdding} addElement={this.addSection} />;
        // let form = (this.state.status.elementAdding ? formHtml : '');
        return (
            <div className="lesson-container">
            <span className="lesson-title">{this.title()}</span>
                {displaySections}

                {displayToolbox}
                {displayStars}
                {/* {form} */}
            </div>
        )
    }
}

export default Lesson