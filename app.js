const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody Ya 2 !!!!!");
});
 
module.exports.app = app;
