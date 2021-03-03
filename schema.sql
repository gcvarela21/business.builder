DROP DATABASE IF EXISTS danielle_DB;
CREATE database danielle_DB;

USE danielle_DB;

CREATE TABLE items (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  name VARCHAR(100) NULL,
  materials VARCHAR(100) NULL,
  description VARCHAR(100) NULL,
  price DECIMAL(10,4) NULL,
  time INTEGER (11) NULL,
  category VARCHAR(100) NULL,
  available BOOLEAN false,
  PRIMARY KEY (id)
);



