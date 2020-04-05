const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody Ya local 05-04 !!!!!");
});
 
module.exports.app = app;
