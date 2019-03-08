const express = require('express')
const app = express()

const hostname = '0.0.0.0'   // set constants
const port = 3002

app.get('/', function (req, res) {
  res.send('Welcome home!'.fontcolor("red"))
})

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/big',  (req, res) =>{
  res.send('<h1>Hello World!</h1>')
})

app.get('/greeting/:id',  (req, res) =>{
  res.send('Hello! The id was ' + req.params.id)
})

app.get('/yo/:buddy',  (req, res) =>{
  res.send('<h1>Yo, ' + req.params.buddy + '!</h1>')
})


app.get('/test_josn_res/:param1/:param2/:param3',  (req, res) =>{
  
  res.json({"Name": req.params.param1,
          "LastName": req.params.param2,
        "AGE": req.params.param3});
})

app.get('/test_josn_res/:param1/:param2/:param3',  (req, res) =>{
  
  res.json({"Name": req.params.param1,
          "LastName": req.params.param2,
        "AGE": req.params.param3});
})


app.get('/check_add_cal/:param1/:param2',  (req, res) =>{
  
  res.send('<h1> First parameter is ' + (req.params.param1) + ' <br> Second param is '+(req.params.param2)+'</h1>')
})


// handle non-existant routes
app.use((req, res, next) => {
  res.status(404).send('status 404 - that page was not found');
})

app.listen(port, hostname, () => {
  console.log(`Example app listening at http://${hostname}:${port}/`)
  console.log('Hit CTRL-C CTRL-C to stop\n')
})

