const {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact,
  } = require("../services/contactsServices");
  
  const getAllContacts = async (req, res) => {
    const contacts = await listContacts();
    res.status(200).json(contacts);
  };
  
  const getContact = async (req, res) => {
    const { id } = req.params;
    const contact = await getContactById(id);
    if (!contact) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(contact);
  };
  
  const deleteContact = async (req, res) => {
    const { id } = req.params;
    const contact = await removeContact(id);
    if (!contact) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(contact);
  };
  
  const createContact = async (req, res) => {
    const newContact = await addContact(req.body);
    res.status(201).json(newContact);
  };
  
  const editContact = async (req, res) => {
    const { id } = req.params;
    const updatedContact = await updateContact(id, req.body);
    if (!updatedContact) {
      return res.status(404).json({ message: "Not found" });
    }
    res.status(200).json(updatedContact);
  };
  
  module.exports = {
    getAllContacts,
    getContact,
    deleteContact,
    createContact,
    editContact,
  };
  