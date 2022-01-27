const Cryptr = require('cryptr');
const app = require('express')();

const CRYPTR = new Cryptr('cs 864 homework 3 api');
const PORT = 8080;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.listen(
    PORT,
    () => console.log(`The server is running on port ${PORT}`)
);

app.get('/hw3', (request, response) => {
    const teamName = request.query.team
    const encryptedString = CRYPTR.encrypt(teamName)
    console.log(`Team ${teamName} has the string ${encryptedString}`)
    response.status(200).send({
        team: teamName,
        token: encryptedString
    })
});