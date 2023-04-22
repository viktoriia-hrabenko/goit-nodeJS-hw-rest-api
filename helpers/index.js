const sendEmail = require('./sendMail');
const handleServerErrors = require('./handleServerErrors');
const createVerifyEmail = require('./createVerifyEmail');
const RequestError = require('./RequestError');
const ctrlWrapper = require('./ctrlWrapper');

module.exports = {
    sendEmail,
    handleServerErrors,
    createVerifyEmail,
    RequestError,
    ctrlWrapper,
  };