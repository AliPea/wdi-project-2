const express = require('express');
const app     = express();
const port    = process.env.PORT || 3000;
const routes  = require("./config/routes");

app.use(express.static(`${__dirname}/public`));

app.get("/", routes);

app.listen(port, () =>{
  console.log("Server has started on port " + port);
});
