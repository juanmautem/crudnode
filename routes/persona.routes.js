module.exports = app => {
  const personas = require("../controllers/persona.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", personas.create);

  // Retrieve all personas
  router.get("/", personas.findAll);

   // Retrieve a single Tutorial with id
  router.get("/:rfc", personas.findOne);

  // Update a Tutorial with id
  router.put("/:rfc", personas.update);

  // Delete a Tutorial with id
  router.delete("/:rfc", personas.delete);

  // Create a new Tutorial
  router.delete("/", personas.deleteAll);

  app.use('/api/personas', router);
};

