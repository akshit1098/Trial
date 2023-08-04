import React, {useState} from "react";

export default function TextForm(props) {

    const handleUpClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLoClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
    };
    
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

    const handleClearClick = () => {
      let newText = ''
      setText(newText);
    };

    const handleCopyClick = () =>{
        let newText = document.getElementById('myBox')
        newText.select()
        navigator.clipboard.writeText(newText.value)
    }

    const handleExtraSpacesClick = () =>{
        let newText = text.split(/[ ] + /)
        setText(newText.join(" "))
    }
    

    const [text, setText] = useState("Enter text here 2")
  return (
    <>
      <div className="container">
        <div>
          <h1>{props.heading}</h1>
          <label for="exampleFormControlTextarea1" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>
          Convert To LowerCase
        </button>
        <button
          className="btn btn-primary my-2 mx-2"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopyClick}>
          Copy
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpacesClick}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
