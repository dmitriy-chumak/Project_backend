const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { URL, PORT } = require('./config');
const routes = require('./src/modules/routes/costs');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', routes);

const start = async () => {
  try {
    await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
    app.listen(PORT, () => {
      console.log("Connection to port", PORT);
    })
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

start();