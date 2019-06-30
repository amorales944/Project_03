var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/index.html"));
  });

  app.get("/sign_in", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/sign_in.html"));
  });

  app.get("/settings", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/settings.html"))
  });

  app.get("/registration", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/registration.html"))
  });

};