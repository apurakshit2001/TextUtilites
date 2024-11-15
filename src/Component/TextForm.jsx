import React, { useState } from 'react';
import Ball from './ball/Ball';

const TextForm = (props) => {
    const [text, setText] = useState('');
    const [findText, setFindText] = useState('');
    const [replaceText, setReplaceText] = useState('');
    const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility
    const disabled = text.length === 0;

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

    const handleFindReplace = () => {
        if (!findText || !replaceText) {
            props.showAlert('Please provide both find and replace text', 'warning');
            return;
        }
        let newText = text.replace(new RegExp(findText, 'g'), replaceText);
        setText(newText);
        setModalVisible(false); // Close the modal after replacement
        props.showAlert('Text Replaced Successfully', 'success');
    }

    const saveToFile = () => {
        if (!text.trim()) {
            props.showAlert('There is no text to save', 'warning');
            return;
        }
        const blob = new Blob([text], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'textfile.txt';
        link.click();
        props.showAlert('Text Saved Successfully', 'success');
    }

    const handleSpeechToText = () => {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.onstart = () => {
            props.showAlert('Listening for speech...', 'info');
        };
        recognition.onerror = (event) => {
            props.showAlert('There was an error while recognizing speech', 'danger');
        };
        recognition.onresult = (event) => {
            const speechToText = event.results[0][0].transcript;
            setText(text + ' ' + speechToText);
            props.showAlert('Speech to Text Activated', 'success');
        };
        recognition.start();
    }
    

    const handleSpeach = () => {
        if (!text.trim()) {
            props.showAlert('There is no text to read', 'warning');
            return;
        }
        const msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        props.showAlert('Text to Speech Activated', 'success');
    }

    const toggleModal = () => {
        setModalVisible(!modalVisible); // Toggle modal visibility
    }

    return (
        <div className='textArea container my-3'>
            <h1>{props.heading}</h1>
            <div className="mb-3 ">
                <textarea
                    className="form-control"
                    id="textBox"
                    rows="8"
                    value={text}
                    onChange={handleUpdateText}
                    placeholder="Enter text for conversion (Uppercase, Lowercase, Trim, etc.)"
                />
            </div>
            <button disabled={disabled} className='btn btn-primary m-1' onClick={handleUpperCase} >Convert To UpperCase</button>
            <button disabled={disabled} className='btn btn-primary m-1' onClick={handleLowerCase} >Convert To LowerCase</button>
            <button disabled={disabled} className='btn btn-primary m-1' onClick={handleRemove} >Clear</button>
            <button disabled={disabled} className='btn btn-primary m-1' onClick={handleTrim}>Remove extra spaces</button>
            <button disabled={disabled} type="submit" onClick={CopyText} className="btn btn-primary m-1">Copy</button>
            <button disabled={disabled} className='btn btn-primary m-1' onClick={toggleModal}>Find-Replace</button> {/* Open Modal */}
            <button disabled={disabled} className='btn btn-primary m-1' onClick={saveToFile}>Save as txt</button>
            <button disabled={disabled} className="btn btn-primary m-1 " onClick={handleSpeach}>Text to speech</button>
            <button className="btn btn-primary m-1 " onClick={handleSpeechToText}>Speech to text</button>

            {/* Modal for Find-Replace */}
            {modalVisible && (
                <div className="modal" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Find and Replace</h5>
                                <button disabled={disabled} type="button" className="btn-close" onClick={toggleModal}></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Find Text"
                                        value={findText}
                                        onChange={(e) => setFindText(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Replace with"
                                        value={replaceText}
                                        onChange={(e) => setReplaceText(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button disabled={disabled} type="button" className="btn btn-secondary" onClick={toggleModal}>Close</button>
                                <button disabled={disabled} type="button" className="btn btn-primary" onClick={handleFindReplace}>Replace</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className='container box2'>
                <h2>Your text summary</h2>
                <p> <span>{text.split(" ").filter((element) => { return element.length !== 0 }).length}</span> words and <span>{text.length}</span> characters</p>
                <p className='Minutes'><span>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</span> Minutes read</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here."}</p>
                <Ball />
            </div>
        </div>
    )
}

export default TextForm;
