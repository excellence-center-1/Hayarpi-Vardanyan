# Use an official Node.js runtime as the base image
FROM node:18
# Set the working directory in the container
# RUN npm install -g cross-env
# RUN mkdir -p /srv/app
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install 
COPY . .
# Value set in .env file.
EXPOSE 3000

# ENV PG_HOST=db
# ENV PG_PORT=5432
# ENV PG_USERNAME=your_postgres_username
# ENV PG_PASSWORD=your_postgres_password
# ENV PG_DATABASE=your_postgres_database


# CMD ["npx", "sequelize", "db:migrate"] 

# CMD ["npx", "sequelize", "db:seed:all"] 

CMD ["npm", "run", "dev"]