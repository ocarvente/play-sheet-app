import {useEffect, useRef, useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Canvas = ({savePhotoUrl}) => {
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
  const createUrl = () => {
   const canvas = document.getElementById('canvas');

   const url = canvas.toDataURL();
   console.log(url)
   return url;
  }
  return (
    <Box sx={{}}>

      <canvas
        id='canvas'
        width="550rem"
        height="300rem"
        onMouseDown = {startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        ref={canvasRef}
      ></canvas>
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
        <Button  onClick={clearCanvas}>clear the board</Button>
        <Button  onClick={() => setErase(!erase)}>Click to toggle eraser</Button>
        <Button  onClick={() => savePhotoUrl(createUrl())}>Save the canvas</Button>
      </Box>

    </Box>
  )
}

export default Canvas;