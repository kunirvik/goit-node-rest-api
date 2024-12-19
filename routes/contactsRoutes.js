const express = require("express");
const router = express.Router();

const {
  getAllContacts,
  getContact,
  deleteContact,
  createContact,
  editContact,
} = require("../controllers/contactsControllers");

const { addContactSchema, updateContactSchema } = require("../schemas/contactsSchemas");
const validateBody = require("../helpers/validateBody");

router.get("/", getAllContacts);
router.get("/:id", getContact);
router.post("/", validateBody(addContactSchema), createContact);
router.delete("/:id", deleteContact);
router.put("/:id", validateBody(updateContactSchema), editContact);

module.exports = router;
