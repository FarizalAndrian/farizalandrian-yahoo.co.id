const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody Ya!!!!");
});
 
module.exports.app = app;
