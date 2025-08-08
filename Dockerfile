# Dockerfile para backend Node.js con Sequelize y Redis
# Etapa 1: Imagen base
FROM node:20
# Establecer directorio de trabajo
WORKDIR /app
# Copiar package.json y package-lock.json
COPY package*.json ./
# Instalar dependencias
RUN npm install
# Copiar el resto del código al contenedor
COPY . .
# Exponer el puerto en el que corre la app
EXPOSE 3001
# Comando por defecto
CMD ["npm", "start"]
