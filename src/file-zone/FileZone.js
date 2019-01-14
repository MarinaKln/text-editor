import React, { Component } from 'react';
import './FileZone.css';

class FileZone extends Component {
    render() {
        let props = this.props;

        return (
            <div id="file-zone">
                <div id="file">
                    <div className="file-zone__result">
                        {props.text}
                    </div>
                    <textarea className="file-zone__textarea" value={props.value} onChange={props.handleChange} />
                </div>
            </div>
        );
    }
}

export default FileZone;
