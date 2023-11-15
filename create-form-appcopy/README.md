PostgreSQL Database Setup
Follow these steps to set up your PostgreSQL database for the Form project:
1. Log in to your PostgreSQL server:
    sudo su postgres
    psql
2. Create a new user named form with the password '1' and grant them the ability to create databases:
    CREATE USER form WITH PASSWORD '1';
    ALTER USER form  CREATEDB;

3. Create a new database named form_nest:
    CREATE DATABASE form_nest;
4. Grant all privileges on the form_nest database to the form user:
    GRANT ALL PRIVILEGES ON DATABASE form_nest TO form;
5. Connect to the form_nest database:
    \c form_nest


DockerHub
https://hub.docker.com/repositories/hayarpi
