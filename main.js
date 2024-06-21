const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

require('dotenv').config();

const port = 3030;

const app = express();

app.use(cors());
app.use(express.json());

const userModel = require('./models/userSchema');

const userRegister = require('./routes/userRegister');
const userEndpoint = require ('./routes/usersAllRoute');
app.use('/users', userRegister);
app.use(userEndpoint);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'failed to connect'));
db.once('open', () => {
  console.log('db connected successfully');
})

async function start (){
  try {

    await mongoose.connect(process.env.DB_URL);
  
    app.listen(port, () => {
      console.log(`server in ascolto alla porta ${port}`)
    });
  }
  catch (err){
    console.error(err);
   }
}
start();