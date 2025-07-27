// Jeffrey: lógica reutilizable de base de datos
exports.create = async ({ username, password }) => { /* hashed password, Sequelize create */ };
exports.authenticate = async ({ username, password }) => { /* compare + jwt.sign */ };
