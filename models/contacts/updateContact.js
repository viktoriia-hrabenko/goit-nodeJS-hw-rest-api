const updateContacts = require('./updateContacts');
const listContacts = require('./listContacts');

const updateContact = async (id, body) => {
    try {
      const contacts = await listContacts();
      const index = contacts.findIndex(item => item.id === id);
      if (index === -1) {
        return null;
      }
      contacts[index] = {...body, id};
      await updateContacts(contacts);
      return contacts[index];
    } catch (error) {
      return error;
    }
  };

module.exports = updateContact;