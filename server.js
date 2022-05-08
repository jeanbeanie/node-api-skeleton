const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./app/models");

db.sequelize.sync();

var corsOptions = {
  // Consumer root
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Root URL of API." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;

// load api routes
require("./app/routes/api.routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
