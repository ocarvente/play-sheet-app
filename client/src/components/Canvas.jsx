import {useEffect, useRef, useState} from 'react';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ClearIcon from '@mui/icons-material/Clear';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
const Canvas = ({createUrl, source}) => {
  const[drawing, setDrawing] = useState(false);
  const[erase, setErase] = useState(false)
  const contextRef = useRef();
  const canvasRef = useRef();

  useEffect(()=> {
    const canvas = document.getElementById("canvas");
    canvasRef.current = canvas;
    const ctx = canvas.getContext("2d");
    const image = new Image(); // Using optional size for image
    canvas.addEventListener("touchstart", touch2Mouse, true);
    canvas.addEventListener("touchmove", touch2Mouse, true);
    canvas.addEventListener("touchend", touch2Mouse, true);

    image.onload = function () {
      const aspectRatio = this.naturalHeight / this.naturalWidth;
      const imageHeight = canvas.height;
      const imageWidth = this.naturalWidth === canvas.width ? this.naturalWidth : imageHeight/aspectRatio;
      const dx = (canvas.width - imageWidth)/ 2;
      console.log(imageHeight, imageWidth)
      ctx.drawImage(image, dx,0, imageWidth, imageHeight);
    };
    image.setAttribute('crossorigin', 'anonymous');
    image.src = source;
    ctx.lineCap = 'round';
    ctx.strokeStyle = erase? 'white': 'black';
    ctx.lineWidth = 5;
    contextRef.current = ctx;
  }, [erase, source])

  const startDrawing = (event) => {
    const{offsetX, offsetY} = event.nativeEvent;
    console.log(offsetX)
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setDrawing(true)
  }


  const draw = (event) => {
    // if i am moving my mouse, but i haven't clicked i dont want to do anything
    if(!drawing) {
      return;
    }
    const{offsetX, offsetY} = event.nativeEvent;

    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  }

  const stopDrawing = () => {
    contextRef.current.closePath();
    setDrawing(false);
  }
  const clearCanvas = () => {
    contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
  }

  function touch2Mouse(e) {
    var theTouch = e.changedTouches[0];
    var mouseEv;

    switch(e.type) {
      case "touchstart": mouseEv="mousedown"; break;
      case "touchend":   mouseEv="mouseup"; break;
      case "touchmove":  mouseEv="mousemove"; break;
      default: return;

    }

    var mouseEvent = document.createEvent("MouseEvent");
    mouseEvent.initMouseEvent(mouseEv, true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);
    theTouch.target.dispatchEvent(mouseEvent);
    e.preventDefault();
  }
  return (
    <Box>
      <canvas
        className= {erase ? 'canvas-container' : 'canvas-container-default'}
        id='canvas'
        width= {550}
        height={350}
        onMouseDown = {startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}


        ref={canvasRef}
      ></canvas>
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
        <Tooltip title="clear all">
          <Button  onClick={clearCanvas}><ClearIcon></ClearIcon></Button>
        </Tooltip>
        <Tooltip title="erase">
          <Button onClick={() => setErase(!erase)}>
          {erase ?
            <span class="material-symbols-outlined">ink_eraser_off</span>
            : <span class="material-symbols-outlined">ink_eraser</span> }
          </Button>
        </Tooltip>
        <Tooltip title='draw'>
          <Button onClick={()=> setErase(false)}>
            <CreateOutlinedIcon></CreateOutlinedIcon>
          </Button>
        </Tooltip>
      </Box>

    </Box>
  )
}

export default Canvas;