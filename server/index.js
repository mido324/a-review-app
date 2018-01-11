const express = require('express');
const bodyParser = require('body-parser');
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
app.use(bodyParser.json());
app.use(session({secret: "mega hyper ultra secret", saveUninitialized: false, resave: false}));

app.post('/login', (req, res) => {
    
    const { userId } = req.body;
    const auth0Url = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/${userId}`;
    axios.get(auth0Url,  {
        headers: {
            Authorization: 'Bearer ' + process.env.AUTH0_MANAGEMENT_ACCESS_TOKEN }
    }).then(response => {
        const userData = response.data;
        req.session.user = {
        name: userData.name, 
        email: userData.email,
        auth0_id: userData.user_id,
         pictureUrl: userData.picture };
        res.json({ user: req.session.user });
    }).catch(error => {
        console.log('error', error);
        res.status(500).json({message:'oh nono'})
    })
})


const PORT = process.env.SERVER_PORT || 3035;
app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});
