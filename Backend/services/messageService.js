// services/messageService.js
//Kenny
const { Message } = require('../models');
const redisClient = require('../utils/redisClient');

const createMessage = async (userId, text) => {
  const newMessage = await Message.create({ userId, text });

  // Invalida cache
  await redisClient.del('messages:page:1');

  return newMessage;
};

const getPaginatedMessages = async (page = 1, limit = 10) => {
  const key = `messages:page:${page}`;
  const cached = await redisClient.get(key);

  if (cached) {
    return JSON.parse(cached);
  }

  const offset = (page - 1) * limit;
  const messages = await Message.findAll({
    limit,
    offset,
    order: [['createdAt', 'DESC']]
  });

  await redisClient.setEx(key, 60, JSON.stringify(messages)); // Cache por 60 segundos

  return messages;
};

module.exports = {
  createMessage,
  getPaginatedMessages
};
