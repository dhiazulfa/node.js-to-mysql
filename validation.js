const {check} = require('express-validator');

exports.signupValidation = [
    check('name', 'Name is requied').not().isEmpty(),
    check('phone_number', 'Phone number is requied').not().isEmpty(),
    check('residence', 'Residence is requied').not().isEmpty(),
    check('description', 'Description is requied').not().isEmpty(),
    check('age', 'Age is requied').not().isEmpty(),
    check('categories', 'Categories is requied').not().isEmpty(),
    check('email_address', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]