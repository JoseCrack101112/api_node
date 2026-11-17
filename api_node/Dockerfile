# Imagen oficial de Node.js 22 con soporte vigente
FROM node:22-slim

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el proyecto al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Documenta que la API escucha en el puerto 3000
EXPOSE 3000

# Arranca la aplicación
CMD ["npm", "start"]
