import logo from './logo.svg';
import './App.css';
import { animate } from "motion";
import React, { useState } from 'react';
import anglebg from './angle.png' ;
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
  const [tmpangle,setTmpAngle] = useState(0);
  const [tmpangle2,setTmpAngle2] = useState(0);
  const [needleLength1,setNeedleLength1] = useState(100);
  const [needleLength2,setNeedleLength2] = useState(100);
  const [showRod,setShowRod] = useState(false);
  var onClickGo = function(){
    setAngle(tmpangle);
    setAngle2(tmpangle2);
    animate("#needle1", {
      transform: `rotate(${tmpangle-90}deg)`
      
    })
    animate("#needle2", {
      transform: `rotate(${tmpangle2-90}deg)`
      
    })
    setShowRod(true);

  }

  return ( 
    <div className="App">

      <input step="10" type="number" onChange={(e)=>{setTmpAngle(parseInt(e.target.value));}}></input>
      <h1>{tmpangle}</h1>
      <input step="10" type="number" onChange={(e)=>{setTmpAngle2(parseInt(e.target.value));}}></input>
      <h1>{tmpangle2}</h1>
      <div>
      <button onClick={onClickGo}>Go</button>

      </div>
      <div style={{display:`${showRod?"block":"none"}`, position:"absolute",height:200, width:840,left:"50%",marginLeft:-420,pointerEvents:'none',zIndex:10}} height="200" width="840">
      <svg width={840} height={200}>
      <line x1={getXCoord(200,angle,needleLength1,10)+5} y1={getYCoord(190,angle,needleLength1,10)+5} x2={getXCoord(190,angle2,needleLength2,10)+455} y2={getYCoord(190,angle2,needleLength2,10)+5} stroke="yellow" strokeWidth={10} />

      </svg>

      </div>

      <div id="meter1" style={{position:"relative", display:"inline-block", marginRight:0, height:200,width:400,backgroundImage: `url(${anglebg})`,backgroundPositionX:3,backgroundPositionY:0,backgroundSize:"100%",backgroundRepeat:"no-repeat"}}>
        <div id="needle1" style={{position:"absolute", bottom:0, left:"50%", transform:`rotate(-90deg)`, transformOrigin:"bottom center", height:100,width:10,background:"black"}}>
          <div id="needle1_link1" onClick={()=>{setNeedleLength1(100);}} style={{height:10,width:10,background:"red",zIndex:101}}></div>
          <div id="needle1_link2" onClick={()=>{setNeedleLength1(70)}} style={{height:10,width:10,marginTop:20,background:"green"}}></div>
          <div id="needle1_link3" onClick={()=>{setNeedleLength1(40)}} style={{height:10,width:10,marginTop:20,background:"blue"}}></div>
        </div>
        <div style={{position:"absolute",top:getYCoord(190,angle,needleLength1,10), left:getXCoord(200,angle,needleLength1,10),height:10,width:10,background:"yellow"}}>
        </div>
      </div>

      <div id="meter2" style={{position:"relative", display:"inline-block", marginLeft:20,height:200,width:400,backgroundImage: `url(${anglebg})`,backgroundPositionX:3,backgroundPositionY:0,backgroundSize:"100%",backgroundRepeat:"no-repeat"}}>
        <div id="needle2"style={{position:"absolute",bottom:0, left:"50%", transform:`rotate(-90deg)`, transformOrigin:"bottom center",height:100,width:10,background:"black"}}>
          <div id="needle2_link1" onClick={()=>{setNeedleLength2(100)}} style={{height:10,width:10,background:"red"}}></div>
          <div id="needle2_link2" onClick={()=>{setNeedleLength2(70)}} style={{height:10,width:10,marginTop:20,background:"green"}}></div>
          <div id="needle2_link3" onClick={()=>{setNeedleLength2(40)}} style={{height:10,width:10,marginTop:20,background:"blue"}}></div>
        </div>
        <div style={{position:"absolute",top:getYCoord(190,angle2,needleLength2,10), left:getXCoord(200,angle2,needleLength2,10),height:10,width:10,background:"yellow"}}>
        </div>
      </div>
     

    </div>
  );
}

export default App;
