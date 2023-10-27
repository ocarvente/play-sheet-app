require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const{getAllPlays, getPlayRandom, getPlay, createPlay, deletePlay, updatePlay} = require('./models');
const path = require('path');
const app = express();
var cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', express.static(path.resolve(__dirname, '../client')));
app.use(cors());
// app.get('/', (req,res) => {
//   res.send('hello world');
// })
app.get('/plays',async (req, res) => {
  try {
    const data = req.body;
    const plays = await getAllPlays(data);
    res.send(plays)
  } catch(error){
    res.status(404).send();
  }
})

app.post('/plays', async(req, res) => {
  try {
    const result = await createPlay(req.body);
    res.send(result);
  } catch(error) {
    res.status(404);
    res.send(error);
  }

});

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
app.delete('/plays/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const result = await deletePlay(id);
    res.send(result);
  } catch(error) {
    res.status(404).send();
  }
})

app.patch('/plays/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const result = await updatePlay(id, req.body);
    res.send(result);
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
  } else {
    console.log("connection successful")
  }

});




