const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody Ya local !!!!!");
});
 
module.exports.app = app;
