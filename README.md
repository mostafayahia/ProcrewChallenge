# ProcrewChallenge
Nodejs Challenge Task

### Getting Started
#### Run app locally
- please make sure you setup your `database_url` including `username, password` in `./config.js`
- please make sure `procrew_challenge` db already exist under your user_name & password
- then run the following commands
```
npm install # if node_modules directory not exist
mysql procrew_challenge -p < ./sql/dummy_data.sql
npm start
```
the default url: `http://localhost:3000`

## API Reference
### GET /users
- return all users
- `curl -X GET 'http://localhost:3000/users`
```
[
  {
    "id": 1,
    "name": "john",
    "email": "test@test.com",
    "phone": "012345"
  },
  {
    "id": 2,
    "name": "joe",
    "email": "tes2t@test.com",
    "phone": "034567"
  }
]
```
### POST /users
- add user to the list
- `curl -X POST -H "Content-Type: application/json" -d '{"name": "test", "phone": "4444", "email": "test3@test.com"}' 'http://localhost:3000/users'`
```
{
  "id": 3,
  "name": "test",
  "email": "test3@test.com",
  "phone": "4444"
}
```
