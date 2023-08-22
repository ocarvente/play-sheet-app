import {useEffect, useRef, useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ClearIcon from '@mui/icons-material/Clear';
const Canvas = ({createUrl}) => {
  const[drawing, setDrawing] = useState(false);
  const[erase, setErase] = useState(false)
  const contextRef = useRef();
  const canvasRef = useRef();

  useEffect(()=> {
    const canvas = document.getElementById("canvas");
    canvasRef.current = canvas;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = 'round';
    ctx.strokeStyle = erase? 'white': 'black';
    ctx.lineWidth = 5;

    contextRef.current = ctx;
  }, [erase])

  const startDrawing = (event) => {
    const{offsetX, offsetY} = event.nativeEvent;
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

  return (
    <Box>
      <canvas
        className= {erase ? 'canvas-container' : ''}
        id='canvas'
        width="550rem"
        height="300rem"
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
      </Box>

    </Box>
  )
}

export default Canvas;