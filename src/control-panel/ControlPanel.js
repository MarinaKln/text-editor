import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {
    render() {
        let props = this.props;

        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button className="format-action" type="button" onClick={(e) => props.clickHandler(e, 'bold')}><b>B</b></button>
                    <button className="format-action" type="button" onClick={(e) => props.clickHandler(e, 'italic')}><i>I</i></button>
                    <button className="format-action" type="button" onClick={(e) => props.clickHandler(e, 'underline')}><u>U</u></button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
