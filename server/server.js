const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 1357;

const { getBil,getAllBil,addBil,deleteBil } = require('./database.js');

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

app.get('/LagerBil', (req,res)=>{
    getAllBil(dataOrError =>{
      res.send(dataOrError)
    })
})

app.get('/LagerBil', (req,res)=>{

  getBil(req.query.id, dataOrError => {
    res.send(dataOrError)
  } )
 
})
//upload new bil
app.post('/upload', (req, res) => {
	addBil(req.body, dataOrError => {
		res.send(dataOrError)
	})
	console.log("Detta är req.body", req.body)
	// res.send("/upload funkar!")

})


// DELETE Bil

app.delete('/bil/:id', (req, res) => {
	console.log('GET / bil')
	deleteBil(req.params.id, dataOrError => {
		console.log(req.params.id)
		res.send(dataOrError)
	})
})

//START WEB SERVER
app.listen(port, () => {
	console.log("Web server listening on localhost:" + port);
})