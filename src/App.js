import React, {Component} from 'react';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from './text.service';

class App extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            text: '',
            selection: '',
            textStyles: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.setSelectStyle = this.setSelectStyle.bind(this);
    }

    componentDidMount() {
        this.selectTextHandler();
    }

    getText() {
        getMockText().then(function (result) {
            console.log(result);

        });
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            text: event.target.value
        });
    }

    selectTextHandler() {
        document.ondblclick = () => {
            this.setState({
                selection: window.getSelection().toString()
            });

            this.formatText();
        };
    }

    formatText() {
        let state = this.state;
        let text;

        if(state.selection.length) {
           let index = state.text.indexOf(state.selection);
           let startString = state.text.substring(0, index);
           let endString = state.text.slice(index + state.selection.length);

            text = (
                <p>
                    {startString}
                    <span className={"highlight ".concat(state.textStyles.join(' '))}>{state.selection}</span>
                    {endString}
                </p>
            );

        } else {
            text = (
                <p>{state.text}</p>
            );
        }

        return text;
    }

    setSelectStyle(e, value) {
        let textStyles = this.state.textStyles;

        if(textStyles.includes(value)) {
            let index = textStyles.indexOf(value);

            this.setState({
                textStyles: this.state.textStyles.splice(index, 1)
            })
        } else {
            this.setState({
                textStyles: [...this.state.textStyles, value]
            })
        }

        this.formatText();
    }

    render() {
        let state = this.state;

        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ControlPanel
                        clickHandler = {this.setSelectStyle}
                    />
                    <FileZone
                        text = {this.formatText()}
                        value = {state.value}
                        handleChange = {this.handleChange}
                    />
                </main>
            </div>
        );
    }
}

export default App;
