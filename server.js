const express = require('express');
const apiRoutes = require('./folder/routes/apiroutes');
const htmlRoutes = require('./folder/routes/Htmlroutes');

const app = express();
const PORT = 3001

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/api', apiroutes);
app.use('/', Htmlroutes);
app.use(express.json());

app.listen(PORT,() =>{
    console.log('App listening on' + PORT);
});