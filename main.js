const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const bodyParser = require('body-parser')

require('dotenv').config();

const port = 3030;

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const userRegister = require('./routes/userRegister');
app.use('/users', userRegister);

const cityAdd = require('./routes/cityAdd');
app.use('/cities', cityAdd);

const commentArea = require('./routes/commentArea');
app.use(commentArea);


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'failed to connect'));
db.once('open', () => {
  console.log('db connected successfully');
})

async function start() {
  try {

    await mongoose.connect(process.env.DB_URL);

    app.listen(port, () => {
      console.log(`server in ascolto alla porta ${port}`)
    });
  }
  catch (err) {
    console.error(err);
  }
}
start();