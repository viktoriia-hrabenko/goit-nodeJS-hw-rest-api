const listContacts = require('./listContacts');

const getContactById = async (id) => {
    const data = await listContacts();
    const result = data.find(
      (contact) => contact.id === String(id)
    );
    if(!result) {
        return null;
    }
    return result;
}

module.exports = getContactById;