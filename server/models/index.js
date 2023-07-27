const db = require('../database');
module.exports = {
  getAllPlays:  async ()=> {
    const queryString = 'SELECT * FROM plays'
    try {
     const plays = await db.query(queryString);
     return plays.rows;
    } catch(error) {
      console.log('query didnt go through, ', error);
    }
  },

  getPlayRandom: async () => {
    try {
      const queryString = 'SELECT * FROM plays ORDER BY RANDOM() LIMIT 1';
      const total = await db.query(queryString);
      return total.rows;
    } catch(error) {
      console.log('unable to get total, ', error);
    }
  },

  getPlay: async (id) => {
    const queryString = 'SELECT * FROM plays WHERE play_id = $1'
    const values = [id];
    try {
      const play = await db.query(queryString, values);
      return play.rows;
    }catch(error) {
      console.log('unable to get play, ', error);
    }
  }
}