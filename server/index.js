require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const {
  getAllPlays,
  getPlayRandom,
  getPlay,
  createPlay,
  deletePlay,
  updatePlay,
  checkUser,
  addUser,
} = require("./models");
const path = require("path");
const app = express();
var cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const jwtSecretKey = "dsfdsfsdfdsvcsvdfgefg";

const PORT = process.env.PORT || 3001;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", express.static(path.join(__dirname, "../client/dist")));

app.get("/plays", async (req, res) => {
  try {
    const data = req.body;
    const plays = await getAllPlays(data);
    res.send(plays);
  } catch (error) {
    res.status(404).send();
  }
});

app.post("/plays", async (req, res) => {
  try {
    const result = await createPlay(req.body);
    res.send(result);
  } catch (error) {
    res.status(404);
    res.send(error);
  }
});

app.get("/play/random", async (req, res) => {
  try {
    const total = await getPlayRandom();
    res.send(total);
  } catch (error) {
    res.status(404).send();
  }
});

app.get("/plays/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const play = await getPlay(id);
    res.send(play);
  } catch (error) {
    res.status(404).send();
  }
});
app.delete("/plays/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deletePlay(id);
    res.send(result);
  } catch (error) {
    res.status(404).send();
  }
});

app.patch("/plays/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updatePlay(id, req.body);
    res.send(result);
  } catch (error) {
    res.status(404).send();
  }
});

app.post("/check-auth", async (req, res) => {
  try {
    const { email } = req.body;
    console.log(req.body);
    const user = await checkUser(email);
    console.log(user);
    res.send({
      status: user.length === 1 ? "User exists" : "User does not exist",
      userExists: user.length === 1,
    });
  } catch (e) {
    console.error(e);
  }
});

app.post("/auth", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await bcrypt.hash(password, saltRounds);
    console.log({ email, password: result });
    const push = await addUser({ email, password: result });
    let loginData = {
      email,
      signInTime: Date.now(),
    };

    const token = jwt.sign(loginData, jwtSecretKey);
    res.send({ message: "success", token });
  } catch (e) {
    console.error(e);
  }
});
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("there was an error connecting");
  } else {
    console.log(`connection successful on ${PORT}`);
  }
});
