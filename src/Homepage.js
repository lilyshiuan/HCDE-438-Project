import "./App.css";
// import TextFile from Material UI
import TextField from "@mui/material/TextField";
import { useState } from "react";
import React from "react";
import WebcamCapture from "./WebcamCapture";
import { FiCircle} from "react-icons/fi";
import { FiTrash2} from "react-icons/fi";
import { FiCheckCircle} from "react-icons/fi";
import { FiSearch} from "react-icons/fi";
import Results from "./Results";

//this component is what the user sees when they first open the app, contains the header, 
// screen, and footer

export default function Homepage(props) {

  const [text, setText] = useState("");
  const [results, setResults] = useState(false)

return (
    <div className="App">
      <header className="header">
        <span className="title">CRAFTY!</span>
        <TextField
            className="search-bar"
            id="search"
            label="Search for item..."
            variant="outlined"
            onChange={(e) => setText(e.target.value)}
            value={text}
            background="white"
          />
            <FiSearch 
                className="search-icon"
                id="search-icon" 
                variant="outlined"
                onChange={(e) => setText(e.target.value)}
                onClick={()=> props.setResults(true)}

              />
      </header>


      {results ? <Results/> : <WebcamCapture setResults={setResults}/>}


    </div>
  );
}