const express = require("express");
const path = require("path");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;


if (process.env.NODE_ENV === "production") {
    app.use(express.static("chess/public"));
  }

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./chess/public/index.html"));
  });

// app.use(express.static("public"));
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);
//remember to change force: true to force: false
// db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
      });
//   });