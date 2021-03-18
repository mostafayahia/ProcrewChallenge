-- drop tables if exists
DROP TABLE IF EXISTS users;

-- recreate tables 
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT, 
  name varchar(100) NOT NULL, 
  email varchar(100) NOT NULL UNIQUE,
  phone VARCHAR(100) NOT NULL UNIQUE
);

-- insert some dummy data
INSERT INTO users (name, email, phone) VALUES ('john', 'test@test.com', '012345');
INSERT INTO users (name, email, phone) VALUES ('joe', 'tes2t@test.com', '034567');



