
const express =require("express");
const session = require("express-session");
//const cookieParser = require("cookie-parser");


const port = 3000;
const app = express();
//app.use(cookieParser());
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: '1234toothsi',
  })
);

const users = [
  {
    username: "aniketl",
    firstName: "Aniket",
    lastName: "Lavand",
    email: "lavand.aniket@gmail.com",
  },
  {
    username: "siddharthhem",
    firstName: "Siddharth",
    lastName: "Hemnani",
    email: "sid@gmail.com",
  },
];


app.get("/login/:username", (req, res) => {
  const user = users.find((user) => user.username === req.params.username);
  
  if (user) {
    req.session.user = user;
    req.session.save();
    res.send(`User logged in: ${(user.username)}`);
  } else {
    res.status(401).send("No such user present");
  }console.log(req.session);
  console.log(req.sessionID);
});

app.get("/hello", (req, res) => {
  console.log(req.session);
  console.log(req.sessionID);
  if (req.session.user) {
        res.send(`hello ${(req.session.user.firstName)}`);
    } else {
        res.status(403).send('no user logged in');
    }
});

app.get("/logout", (req, res) => {
  console.log(req.session);
  console.log(req.sessionID);
    req.session.destroy();
    res.send("User logged out");
});

app.listen(port, (req, res) => {
  console.log(`API listening on port http://localhost:${port}`);
});
