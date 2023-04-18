const express = require('express');

const { auth, validation, ctrlWrapper } = require('../../middlewares');
const { auth: ctrl } = require('../../controllers');
const { joiSignUpSchema, joiLoginSchema } = require('../../models/user');

const router = express.Router();

router.post(
    '/signup',
    validation(joiSignUpSchema),
    ctrlWrapper(ctrl.signup)
);

router.get('/login', validation(joiLoginSchema), ctrlWrapper(ctrl.login));

router.post('/logout', auth, ctrlWrapper(ctrl.logout));

module.exports = router;