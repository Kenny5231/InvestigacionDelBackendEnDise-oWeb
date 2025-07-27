// Modelo Usuario con validación y asociación
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false }
  });
  User.associate = models => {
    User.hasMany(models.Message, { foreignKey: 'userId', as: 'messages' });
  };
  return User;
};
