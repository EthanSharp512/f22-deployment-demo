const express = require("express");
const path = require("path");

const app = express();

//lets build the path to our front end files so heroku can acess them

//endpoints
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/index.html"))
})

console.log(__dirname);

//when heroku deploys our app, it will provide its own port number
// this port number i s stored on process.env.PORT

//IF we are not depolying on heroki (on our local machine),
//it will then default to port 4005 (just picked 4005 arbitrarily)

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})