import React, { useState } from 'react'
import './TextForm.css';

export default function TextForm(props) {
    
    const [text, setText] = useState('Enter your text...')

    const handleUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleRemove = () => {
        setText('');
    }
    const handleTrim = () => {
        let newText = text.replace(/\s{2,}/g, ' ').trim();
        setText(newText);
    }
    const handleDoNot = () => {
        const message = "You are an idiot! Now your computer will go KABoom!! 🧨";
        setText(message);

        let msg = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(msg);
    }

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const CopyText = () => {
        navigator.clipboard.writeText(text);
    }

    return (
        <>
            <div className='container'>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" onChange={handleOnChange} value={text} ></textarea>
                </div>

                <button className='btn btn-primary' onClick={handleUpperCase} >Convert To UpperCase</button>

                <button className='btn btn-primary' onClick={handleLowerCase} >Convert To LowerCase</button>

                <button className='btn btn-primary' onClick={handleRemove} >RemoveAll</button>

                <button className='btn btn-primary' onClick={handleTrim}>Trim</button>


                <button className='btn btn-primary' onClick={handleDoNot} >Don't click</button>


                <button type="submit" onClick={speak} className="btn btn-primary">Speak</button>

                <button type="submit" onClick={CopyText} className="btn btn-primary">CopyText</button>




            </div >

            <div className='container box2'>
                <h2>Your text summary</h2>
                <p> <span>{text.split(" ").length - 1}</span> words and <span>{text.length}</span> characters</p>
                <p className='Minutes'><span>{0.008 * text.split(" ").length}</span> Minutes read</p>

                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>

                {/* <p>Sentences {text.split(".").filter(Sentences => Sentences !== "").length}</p>
                <p> Paragraphs {text.split("\n").filter(paragraphs => paragraphs !== "").length}</p> */}

                {/* <p>Sentences {text.split(".").filter(function (Sentences) {
                    return Sentences !== ""
                }).length}</p>

                <p> Paragraphs{text.split('\n').filter(function (paragraphs) {
                    return paragraphs !== "";
                }).length}</p> */}
            </div>

            <div className='ball'></div>

            <div className='ball'></div>

        </>
    )
}
