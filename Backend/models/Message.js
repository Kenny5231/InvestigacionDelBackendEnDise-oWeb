module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: { type: DataTypes.STRING, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false }
  });
  Message.associate = models => {
    Message.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  return Message;
};
