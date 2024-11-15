import React, { useState } from 'react'
import Ball from './ball/Ball';

const TextForm = (props) => {
    const [text, setText] = useState('Enter Text you mother fucker..');
    const handleSpeach = () => {
        const msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        props.showAlert('Text to Speech Activated', 'success');
    }
    const handleUpdateText = (event) => {
        setText(event.target.value);
        props.showAlert('Text Updated Successfully', 'success');
    }
    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Text Converted to Upper Case', 'success');
    }
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text Converted to Lower Case', 'success');
    }
    const handleRemove = () => {
        setText('');
        props.showAlert('Text Removed Successfully', 'success');
    }
    const handleTrim = () => {
        let newText = text.replace(/\s{2,}/g, ' ').trim();
        setText(newText);
        props.showAlert('Text Trimmed Successfully', 'success');
    }
    const CopyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Text Copied Successfully', 'success');
    }

    return (
        <div className='textArea container my-3'>
            <h1>{props.heading}</h1>
            <div className="mb-3 ">
                <textarea className="form-control" id="textBox" rows="8" value={text} onChange={handleUpdateText} placeholder="Enter Text Here.."></textarea>
            </div>
            <button className="btn btn-primary m-2 " onClick={handleSpeach}>🤖🔊</button>
            <button className='btn btn-primary m-2' onClick={handleUpperCase} >Convert To UpperCase</button>
            <button className='btn btn-primary m-2' onClick={handleLowerCase} >Convert To LowerCase</button>
            <button className='btn btn-primary m-2' onClick={handleRemove} >RemoveAll</button>
            <button className='btn btn-primary m-2' onClick={handleTrim}>Trim</button>
            <button type="submit" onClick={CopyText} className="btn btn-primary m-2">Copy</button>

            <div className='container box2'>
                <h2>Your text summary</h2>
                <p> <span>{text.split(" ").length - 1}</span> words and <span>{text.length}</span> characters</p>
                <p className='Minutes'><span>{0.008 * text.split(" ").length}</span> Minutes read</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here."}</p>
                <Ball />
            </div>
        </div>
    )
}

export default TextForm
