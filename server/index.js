require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const{getAllPlays, getPlayRandom, getPlay} = require('./models');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', express.static(path.resolve(__dirname, '../client/dist')));


app.get('/plays',async (req, res) => {
  try {
    const plays = await getAllPlays();
    res.send(plays)
  } catch(error){
    res.status(404).send();
  }
})

app.get('/play/random', async(req, res) => {
  try {
    const total = await getPlayRandom();
    res.send(total);
  } catch(error) {
    res.status(404).send();
  }
})

app.get('/plays/:id', async(req, res) => {
  try {
    const {id} = req.params;

    const play = await getPlay(id);
    res.send(play);
  } catch(error) {
    res.status(404).send();
  }
})

app.get('*', (req,res) =>{
  res.sendFile(path.resolve(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, (err) => {
  if(err) {
    console.log('there was an error connecting');
  }

});




