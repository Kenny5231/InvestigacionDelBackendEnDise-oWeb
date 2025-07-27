// Kenny: express-validator para rutas
const { body } = require('express-validator');
exports.registerValidator = [
  body('username').isLength({ min: 3 }),
  body('password').isLength({ min: 6 })
];
