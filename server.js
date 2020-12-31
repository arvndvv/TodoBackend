require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use(cors());

require('./src/app/routerHandler')(app);
require("./src/config/mongoose");

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`listening on ${port}`)
})