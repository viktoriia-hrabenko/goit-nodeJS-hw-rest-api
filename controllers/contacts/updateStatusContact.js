const { NotFound } = require('http-errors');

const { Contact } = require('../../models');

const updateStatusContact = async (req, res) => {
    const { id } = req.params;
    const { favourite } = req.body;
    const result = await Contact.findByIdAndUpdate(
        id,
        {favourite},
        {new: true}
    );

    if(!result) {
        throw new NotFound(`Contact with id=${id} not found`);
    }

    res.json({
        status: 'success',
        code: 200,
        data: {
            result,
        },
    });
};

module.exports = updateStatusContact;