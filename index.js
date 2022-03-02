const Cryptr = require('cryptr');
const { response } = require('express');
const app = require('express')();

const CRYPTR = new Cryptr('cs 864 homework 3 api');
const PORT = 8080;

// Setup CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

// Start the API
app.listen(
    PORT,
    () => console.log(`The server is running on port ${PORT}`)
);

// Handle the /hw3 endpoint
app.get('/hw3', (request, response) => {

    let teamName = '';
    let encryptedString = '';
    let statusCode = 200

    if (!request.query.hasOwnProperty('team'))
        {
            teamName = 'Team name missing in API call.'
            statusCode = 400;
        }
    else
        { 
            teamName = request.query.team;
            encryptedString = CRYPTR.encrypt(teamName);
        }

    response.status(statusCode).send({
        team: teamName,
        token: encryptedString
    })
});