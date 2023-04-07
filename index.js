const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./dbcofig/db.js");
const userRoutes = require("./routes/routes.js");
const cors = require("cors");

const app = express();
const port = 5000;
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "/*"); // update to match  the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
//   });

// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// sequelize
//   .sync( )
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   app.get("/",(res,req)=>{
    
//     req.json("Hello from the Server!")
//   })

app.use("/user", userRoutes);
app.listen(port, () => console.log(`app is listening on port ${port}`));
