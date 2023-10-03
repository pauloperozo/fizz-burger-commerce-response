# Usa la imagen oficial de Node.js 18 como base
FROM node:18

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json al directorio de trabajo
COPY package.json .

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos al directorio de trabajo
COPY . .

# Expone el puerto 4000 para que pueda ser accedido desde fuera del contenedor
EXPOSE 4000

# Inicia la aplicación
CMD ["npm", "start"]