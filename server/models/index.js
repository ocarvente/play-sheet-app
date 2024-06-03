const db = require("../database");
module.exports = {
  getAllPlays: async () => {
    const queryString = "SELECT * FROM plays ORDER BY play_id";
    try {
      const plays = await db.query(queryString);
      return plays.rows;
    } catch (error) {
      console.log("query didnt go through, ", error);
    }
  },

  getPlayRandom: async () => {
    try {
      const queryString = "SELECT * FROM plays ORDER BY RANDOM() LIMIT 1";
      const total = await db.query(queryString);
      return total.rows;
    } catch (error) {
      console.log("unable to get total, ", error);
    }
  },

  getPlay: async (id) => {
    const queryString = "SELECT * FROM plays WHERE play_id = $1";
    const values = [id];
    try {
      const play = await db.query(queryString, values);
      return play.rows;
    } catch (error) {
      console.log("unable to get play, ", error);
    }
  },
  createPlay: async (data) => {
    const { play_name, play_url_photo, play_description } = data;
    const queryString =
      "INSERT INTO plays (play_name, play_url_photo, play_description) VALUES ($1, $2, $3)";
    const values = [play_name, play_url_photo, play_description];
    try {
      const queryResult = await db.query(queryString, values);
      return queryResult;
    } catch (error) {
      console.log("unable to post play, ", error);
    }
  },
  deletePlay: async (id) => {
    const queryString = "DELETE FROM plays WHERE play_id = $1";
    const values = [id];
    try {
      const queryResult = await db.query(queryString, values);
      return queryResult;
    } catch (error) {
      console.log("unable to delete play, ", error);
    }
  },
  updatePlay: async (id, data) => {
    try {
      const { play_name, play_url_photo, play_description } = data;
      const queryString =
        "UPDATE plays SET play_name = $1,play_url_photo = $2, play_description = $3 WHERE play_id = $4";
      const values = [play_name, play_url_photo, play_description, id];
      const queryResult = await db.query(queryString, values);
      return queryResult;
    } catch (error) {
      console.log("unable to update play, ", error);
    }
  },

  checkUser: async (email) => {
    try {
      console.log(email);
      const queryString = "SELECT * FROM users WHERE email = $1";
      const user = await db.query(queryString, [email]);
      return user.rows;
    } catch (e) {
      console.error("unable to execute finding email query, ", error);
    }
  },
  addUser: async (data) => {
    try {
      const { email, password } = data;
      console.log(data);
      const queryString = "INSERT INTO users (email, passcode) VALUES($1, $2)";
      const result = await db.query(queryString, [email, password]);
      return result.rows;
    } catch (e) {
      console.error(e);
    }
  },
};
