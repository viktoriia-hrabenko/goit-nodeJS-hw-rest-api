const { v4 } = require('uuid');

const updateContacts = require('./updateContacts');
const listContacts = require('./listContacts');

const addContact = async (body) => {
    try {
      const contacts = await listContacts();
      const newContact = {
        id: v4(),
        ...body,
      };
      contacts.push(newContact);
      await updateContacts(contacts);
      return newContact;
    } catch (error) {
      return error;
    }
};

module.exports = addContact;