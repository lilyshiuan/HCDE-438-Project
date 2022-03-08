import React from "react";
import "./App.css";
import Webcam from "react-webcam";
import { useState } from 'react';
import { FiCircle} from "react-icons/fi";
import { FiTrash2} from "react-icons/fi";
import { FiCheckCircle} from "react-icons/fi";


const videoConstraints = {
  width: 1080,
  height: 560,
  facingMode: "user",
};

export default function WebcamCapture() {
  const webcamRef = React.useRef(null);
  const [picture, setPicture] = useState(null)

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc)
    setPicture(imageSrc)
  }, [webcamRef]); 

  // if there is a value for picture, return picture, if picture is empty/null, return camera
  // if src={picture} = (!null)
  //   return (<img src={picture} />) 

  //       return <div onClick={()=> setShowCamera(!null)} />

  return (
    <div className="camera">
      <Webcam
        mirrored={true}	
        audio={false}
        width={1080}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />
      <img src={picture} />

      <div className="footer">
        <FiTrash2 className="trash-icon" size="small" />

        <FiCircle 
          className="take-picture-icon" 
          size="small" 
          onClick={capture} 
          />

        <FiCheckCircle className="okay-icon" size="small" />
    </div>
  );
}
