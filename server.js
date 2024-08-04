// Note of where I'm at: I am doing a weird thing where I was making dashboard homeRoutes before login, also no dashboard api route, do I need one, it wants just user data with post, so user route prob. I think next I wanna just do login stuff cause it's half started anyway.



const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const path = require('path');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 90 * 24 * 60 * 60 * 1000, //expires in 90 days
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync( {force: false} ).then(() => {
  app.listen(PORT, () =>{
      console.log(`Server started at ${PORT}`);
  })
});