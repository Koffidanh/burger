### Schema
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(45) NOT NULL,
	devoured BOOLEAN ,
	PRIMARY KEY (id)
);
