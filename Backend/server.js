const app = require('./app');
const { requestLogger } = require('./utils/logger');
app.use(requestLogger);
const server = require('http').createServer(app);
require('./socket')(server);
server.listen(3000, () => console.log('🚀 API escuchando en 3000'));
