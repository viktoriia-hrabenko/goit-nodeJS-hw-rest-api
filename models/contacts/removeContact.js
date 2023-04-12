const updateContacts = require('./updateContacts');
const listContacts = require('./listContacts');

const removeContact = async (id) => {
    try {
      const contacts = await listContacts();
      const idx = contacts.findIndex(item => item.id === id);
      if(idx === -1) {
      return null;
      }
      const newContact = contacts.filter((_, index) => index !== idx);
      await updateContacts(newContact);
      return contacts[idx];
    } catch (error) {
      return error;
    }
};

module.exports = removeContact;