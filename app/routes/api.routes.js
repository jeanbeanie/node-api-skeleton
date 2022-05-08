module.exports = app => {
  var router = require("express").Router();

  // ROUTES FOR EXAMPLE OBJ
  //
  const example = require("../controllers/example.controller.js");
  // Create a new one
  router.post("/", example.create);
  // Retrieve all
  router.get("/", example.findAll);
  // Retrieve all
  router.get("/published", example.findAllPublished);
  // Retrieve a single one with id
  router.get("/:id", example.findOne);
  // Update a one with id
  router.put("/:id", example.update);
  // Delete one with id
  router.delete("/:id", example.delete);
  // Delete all
  router.delete("/", example.deleteAll);

  app.use('/api/examples', router);
};
