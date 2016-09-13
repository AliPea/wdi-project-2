const express    = require("express");
const morgan     = require("morgan");
const bodyParser = require("body-parser");
const cors       = require("cors");
const mongoose   = require("mongoose");
const expressJWT = require("express-jwt");


const app           = express();
const config        = require("./config/config");
const apiRouter     = require('./config/apiRoutes');
const webRouter     = require('./config/webRoutes');

mongoose.connect(config.db);

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(`${__dirname}/public`));
// app.use("/api", expressJWT({ secret: config.secret })
//   .unless({
//       path: [
//         { url: "/api/register", method: ["POST"] },
//         { url: "/api/login",    method:["POST"] },
//       ]
//   }));

app.use(jwtErrorHandler);

function jwtErrorHandler(err, req, res, next){
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ message: "Unauthorized request."});
  }
  return next();
}

app.use("/api", apiRouter);
app.use("/",    webRouter);

app.listen(config.port, () =>
console.log(`Express started on port: ${config.port}`));
