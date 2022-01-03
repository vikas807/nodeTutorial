//  this is configuration
const express = require('express')
const app = express()
const port = 3000

// this is api
app.get('/', (req, res) => res.send('Hello Vikas World'))

// bye world
app.get('/bye', (req, res) => res.send('Bye World!'))

// my name is vikas
app.get('/vikas', (req, res) => res.send('my name is vikas!'))


// name add
app.get('/gol', (req, res) => {
  //req.query.color1 === 'red'  // true
  //req.query.color2 === 'blue' // true
  var number = req.query.number;

  if (number > 10) {
    res.send('greater than 10')
  } else {
    res.send('greater less than 10')
  }

})

// name add
app.get('/something', (req, res) => {
  var favcolor = req.query.color1;
  var notFav = req.query.color2;
  console.log(req.query);
  var response = "my fav color is" + favcolor + " not fav color is " + notFav;
  res.send(response);
})


// running the app
app.listen(port, () => console.log(`Example app listening on port ${port}!`))