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

//this component is what the user sees when they first open the app, contains the header, 
// screen, and footer

export default function Homepage() {

  const [text, setText] = useState("");

// when the FiCircle icon is clicked, camera takes a screenshot
// function capture () {
//     getScreenshot({width: 1080, height: 560});
// }

// when the FiTrash2 icon is clicked, camera trashes the screenshot and returns to camera (original state)
//function retake() {
//  if FiTrash2.onClick
//      WebcamCapture(null);

// when the FiCheckCircle is clicked, user is navigated to the Result page
//function select() {
//  if FiCheckCircle.onClick
//  const [page, setPage] = useState('Result')
//}

// when FiSearch is clicked, user is navigated to the Result page
//function search() {
//  if FiSearch.onClick
//  const [page, setPage] = useState('Result')
//}

// navigation function
//const [page, setPage] = useState('Homepage')
//  return <main>
//      <Navigation page={page} setPage={setPage} />
//      {page==='Homepage' && <Homepage />}
//      {page==='Result' && <Result />}
//  </main>
//  }
//  function Navigation(props) {
//  return <main>
//      <div onClick={()=> props.setPage('Homepage')}>Homepage</div>
//      <div onClick={()=> props.setPage('Result')}>Result</div>
//  </main>
//  }
//}

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
              />
      </header>

        <WebcamCapture/>

        {/* <div className="footer">

            <FiTrash2 className="trash-icon" size="small" />

            <FiCircle 
              className="take-picture-icon" 
              size="small" 
              //onClick=              
              />


            <FiCheckCircle className="okay-icon" size="small" />


       
            
        </div> */}

    </div>
  );
}