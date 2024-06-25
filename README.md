# Development

Pasos para levantar la app en desarrollo

1. levantar la base de datos

```
docker compose up -d
```

2. Crear copía de el env.template, y renombrarlo a .env
3. Reemplazar las variables de entorno
4. Ejecutar el comando `npm install`
5. Ejecutar el comando `npm run dev`
6. Ejecutar el comando de prisma `npx prisma migrate dev`
7. Ejecutar el comando de prisma `npx prisma generate`
8. Ejecutar el SEED (para crear la BD local) localhost:3000/api/seed //PARA GENERAR LOS ARCHIVOS NECESARIOS PARA LA APP

# Prisma commands

```
npx prisma init
npx prisma migrate dev
npx prisma generate
```
