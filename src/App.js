import logo from './logo.svg';
import './App.css';
import { animate } from "motion";
import React, { useState } from 'react';

function App() {
  var getXCoord = function (containerWidth,angle,needleLength,needleWidth){
    console.log(Math.cos(angle* Math.PI / 180))
    return containerWidth-(Math.cos(angle* Math.PI / 180)*(needleLength-(needleWidth/2)));
  }
  var getYCoord = function(containerHeight,angle,needleLength,needleWidth){
    return containerHeight-(Math.sin(angle* Math.PI / 180)*needleLength-(needleWidth/2));
  }
  const [angle,setAngle] = useState(0);
  const [angle2,setAngle2] = useState(0);

  return ( 
    <div className="App">
      {/* <div id="test" style={{height:100,width:100,background:"red"}} onClick={()=>{
        animate("#test", {
          transform: "rotate(45deg)",
          transformOrigin: "bottom center"
        })
      }}></div> */}
      <input step="10" type="number" onChange={(e)=>{setAngle(parseInt(e.target.value))}}></input>
      <h1>{angle}</h1>
      <input step="10" type="number" onChange={(e)=>{setAngle2(parseInt(e.target.value))}}></input>
      <h1>{angle2}</h1>
      <div style={{position:"absolute",zIndex:100,height:200, width:840,left:"50%",marginLeft:-420}} height="200" width="840">
      <svg width={840} height={200}>
      <line x1={getXCoord(200,angle,100,10)+5} y1={getYCoord(190,angle,100,10)+5} x2={getXCoord(190,angle2,100,10)+455} y2={getYCoord(190,angle2,100,10)+5} stroke="yellow" strokeWidth={10} />

      </svg>

      </div>

      <div id="meter1" style={{position:"relative", display:"inline-block", marginRight:20, height:200,width:400,background:"purple"}}>
        <div id="needle1" style={{position:"absolute", bottom:0, left:"50%", transform:`rotate(${angle-90}deg)`, transformOrigin:"bottom center", height:100,width:10,background:"black"}}>
          <div id="needle1_link1" style={{height:10,width:10,background:"red"}}></div>
          <div id="needle1_link2" style={{height:10,width:10,marginTop:20,background:"green"}}></div>
          <div id="needle1_link3" style={{height:10,width:10,marginTop:20,background:"blue"}}></div>
        </div>
        <div style={{position:"absolute",top:getYCoord(190,angle,100,10), left:getXCoord(200,angle,100,10),height:10,width:10,background:"yellow"}}>
        </div>
      </div>

      <div id="meter2" style={{position:"relative", display:"inline-block", marginLeft:20,height:200,width:400,background:"purple"}}>
        <div id="needle2"style={{position:"absolute",bottom:0, left:"50%", transform:`rotate(${angle2-90}deg)`, transformOrigin:"bottom center",height:100,width:10,background:"black"}}>
          <div id="needle2_link1" style={{height:10,width:10,background:"red"}}></div>
          <div id="needle2_link2" style={{height:10,width:10,marginTop:20,background:"green"}}></div>
          <div id="needle2_link3" style={{height:10,width:10,marginTop:20,background:"blue"}}></div>
        </div>
        <div style={{position:"absolute",top:getYCoord(190,angle2,100,10), left:getXCoord(200,angle2,100,10),height:10,width:10,background:"yellow"}}>
        </div>
      </div>
     

    </div>
  );
}

export default App;
