const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 1356;

const { getBil } = require('./database.js');

//MIDDLEWARE
app.use((req, res, next) => {
	console.log(`${req.method} ${req.url}`);
	next()
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '../build'));


//ROUTES

app.get("/", (req, res) => {
	console.log("Listening on port: ", port);
	res.send("Woho it works!")
});

//GET 
app.get('/LagerBil', (req, res) => {
	getBil(dataOrError => {
		res.send(dataOrError)
	});

})



//START WEB SERVER
app.listen(port, () => {
	console.log("Web server listening on localhost:" + port);
})