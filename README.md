# E-commerce Back End    
    
## Description
This app is a MySQL database backend for an e-commerce site. This app uses the latest technologies so a company can compete with other e-commerce sites. Add categories, products, and tags using Insomnia.

## User story
AS A manager at an internet retail company   
I WANT a back end for my e-commerce website that uses the latest technologies   
SO THAT my company can compete with other e-commerce companies   

## Acceptance Criteria
GIVEN a functional Express.js API   
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file   
THEN I am able to connect to a database using Sequelize   
WHEN I enter schema and seed commands   
THEN a development database is created and is seeded with test data   
WHEN I enter the command to invoke the application   
THEN my server is started and the Sequelize models are synced to the MySQL database   
WHEN I open API GET routes in Insomnia Core for categories, products, or tags   
THEN the data for each of these routes is displayed in a formatted JSON   
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core   
THEN I am able to successfully create, update, and delete data in my database   

## Video Demo
[E-Commerce Backend Tutorial.webm](https://github.com/MaryVDa/E-commerce-back-end/assets/122223756/fb4eb791-eeba-4f67-8fb0-9e3f6e1bcc5d)


## Install
Please install these packages:    
```npm i```   
```npm i express```   
```npm i mysql2```    
```npm i dotenv```   
```npm i sequelize```
   
## Usage
Type the following commands into your terminal to root your mysql:
```mysql -u root -p```   
Enter password. Then type:   
```SOURCE db/schema.sql```   
Then quit:   
```quit```   
Next run the seed:   
```npm run seed```   
And start the application:   
```npm start```   

## Github
https://github.com/MaryVDa/E-commerce-back-end

## Credits
starter code by: coding-boot-camp   
