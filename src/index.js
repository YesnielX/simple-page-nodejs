const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
var body_parser = require('body-parser');

//post

app.use(body_parser.urlencoded({extended:true}));



// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));

// routes
app.use(require('./routes/'));


// static files
app.use(express.static(path.join(__dirname, 'index.html')));

// listening the Server
app.listen(app.get('port'), () => {
  console.log('Servidor en puerto', app.get('port'));
});
