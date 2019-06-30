require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
// //remember to change force: true to force: false
// db.sequelize.sync({ force: false }).then(function() {
    
//   });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });