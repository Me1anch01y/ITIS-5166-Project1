// handles all requests associated with events. This module should include all 7 RESTful routes.

const express = require("express");
const controller = require("../controllers/eventController");

const { fileUpload } = require("../middleware/fileUpload");

const router = express.Router();

//GET /events: displays all events to the user
router.get("/", controller.index);

//GET /events/new: send html form for creating new event
router.get("/new", controller.new);

//POST /events: create a new event
router.post("/", fileUpload, controller.create);

//GET /events/:id: send details of event identified by id
router.get("/:id", controller.show);

//GET /events/:id/edit: send the html form for editing an existing event
router.get("/:id/edit", controller.edit);

//PUT /events/:id: update the event identified by id
router.put("/:id", controller.update);

//DELETE /events/:id: delete the event identified by id
router.delete("/:id", controller.delete);

module.exports = router;
