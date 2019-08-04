//  this is configuration
const express = require('express')
const app = express()
const port = 3000

// this is api
app.get('/', (req, res) => res.send('Hello World!'))

// bye world
app.get('/bye', (req, res) => res.send('Bye World!'))

// my name is Bhanu
app.get('/Bhanu', (req, res) => res.send('my name is Bhanu!'))


// name add
app.get('/something', (req, res) => {
  //req.query.color1 === 'red'  // true
  //req.query.color2 === 'blue' // true
  var favcolor = req.query.color1;
  var notFav = req.query.color2;
  console.log(req.query);
  var response = "my fav color is" + favcolor + " not fav color is " + notFav;
  res.send(response);
})


// running the app
app.listen(port, () => console.log(`Example app listening on port ${port}!`))