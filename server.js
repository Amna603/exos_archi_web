// Import express 

let express = require('express');

// Initialize the app 
let app = express();
var serverPort = 8080;

// CORS enable
const cors = require('cors');
app.use(cors());

app.use(express.json());

const Sequelize = require('sequelize')
const db = require('./db.js')

// Creating all the tables defined in user
db.sync()
//db.sync({force: true})

let router = require('./routes');
app.use("/", router)

 // Launch app to listen to specified port
app.listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
})