const path = require("path");
const express = require("express");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3001;

const grocery = require("./config/config");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Shhh",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: grocery,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  grocery.sync({ force: false });
});
