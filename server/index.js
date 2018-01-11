const express = require('express');
const bodyPaser = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const axios = require('axios');


require('dotenv').config();

massive(process.env.CONNECTION_STRING).then(db => {
     app.set('db', db);
}).catch(error => {
    console.log('error', error);
})

const app = express();
app.use(bodyPaser.json());
app.use(session({secret: "mega hyper ultra secret", saveUninitialized: false, resave: false}));

app.post('/login', (req, res) => {
    res.status(200).json( { user:{name: 'bob again'}})
})


const PORT = process.env.SERVER_PORT || 3035;
app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});
