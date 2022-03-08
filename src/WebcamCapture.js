import React from "react";
import "./App.css";
import Webcam from "react-webcam";
import { useState } from 'react';
import { FiCircle} from "react-icons/fi";
import { FiTrash2} from "react-icons/fi";
import { FiCheckCircle} from "react-icons/fi";


const videoConstraints = {
  width: 1080,
  height: 650,
  facingMode: "user",
};

export default function WebcamCapture(props) {
  const webcamRef = React.useRef(null);
  const [picture, setPicture] = useState(null);


  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc)
    setPicture(imageSrc)
  }, [webcamRef]); 

  
  return (
    <div className="camera">
      {picture ? <img src={picture} 
      className="screenshot"
      /> : <Webcam
        mirrored={true}	
        audio={false}
        width={1080}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}        
      />}
      
      <div className="footer">
        <FiTrash2 
          className="trash-icon" 
          size="small" 
          onClick={()=> setPicture(null)
          }
          />

        <FiCircle 
          className="take-picture-icon" 
          size="small" 
          onClick={capture} 
          />

        <FiCheckCircle 
          className="okay-icon" 
          size="small" 
          onClick={()=> props.setResults(true)}
          />

      </div>
      </div>
  );
}
