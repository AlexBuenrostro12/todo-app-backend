# todo-app-backend

# 1.- Instalar Prisma CLI
npm install -g prisma
# 2.- Instalar Docket
https://docs.docker.com/install/
# 3.- Iniciar prisma y lanzar la base de datos
docker-compose up -d
Despues de esto prisma esta conectada a la base de datos local en: http://localhost:4466.
# 4.- Desplegar Prisma datamodel
npm run deploy
# 5.- Finalmente ejecutar el Servidor
npm run dev
Despues de ejecutar este comando
el servidor local estara en: http://localhost:4000/

# Documentacion oficial
https://www.prisma.io/docs/get-started/01-setting-up-prisma-new-database-JAVASCRIPT-a002/
