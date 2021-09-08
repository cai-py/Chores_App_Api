# Chores App Api

This project is a prototype API for a Chores App I am developing. As of now it includes the following features:

- Track Users 
- Track Chores and their point values
- Keep a weekly archive of who's completed which chores

## Overview 
This API uses an Express.js server to call data from a Mongo database and serves json data about users, chores, and archives. The API allows you full control to create, read, update, and delete data from the db. Currently there is no layer of security or authentication but I intend to impliment that before fully deploying my app. 

## Architecture 
Currently I only have 3 entities in this db and their relathionships look something like this. 
![DB-ERD](./komono/DB-ERD.jpeg)
