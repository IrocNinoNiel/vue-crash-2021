const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to db
const key = require('./config/key').MongoURI;
mongoose.connect(key,{useUnifiedTopology:true,useNewUrlParser:true})
    .then(()=>console.log('Database Connection Established...'))
    .catch(err=>console.log(err));

// Middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json()); 

app.use(cors());

const tasks = require('./routes/api/task');

app.use('/tasks',tasks);

app.listen(PORT, () => console.log(`Server Started at Port ${PORT}`))
