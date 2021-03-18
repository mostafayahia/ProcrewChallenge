// PLEASE ENTER YOUR USER NAME & PASSOWRD HERE
const USER_NAME = 'yahia';
const PASSWORD = 'password';
const DATABASE_NAME = 'procrew_challenge';

module.exports = { 
    DATABASE_URL: `mysql://${USER_NAME}:${PASSWORD}@localhost:3306/${DATABASE_NAME}`
};