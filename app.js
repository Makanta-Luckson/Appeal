const express = require('express');
const mongoose = require('mongoose');
const database = require('./database/connection');
const app = express();


//database connection
mongoose.connect(database)
.then(() => console.log('database connected'))
.catch(err => console.log(err));

//setting up a view engine
app.set('view engine', 'ejs');

//setting up the handle-bar
app.use(express.urlencoded({extended : true}));



//routing
app.use('/', require('./routes/index'));
app.use('/user', require('./routes/user'));








app.listen(process.env.PORT || 3000, () =>{
    console.log('Server running');
});