CREATE TABLE store(
id SERIAL PRIMARY KEY,
name VARCHAR(20) UNIQUE NOT NULL,
budget FLOAT(15) ,
address VARCHAR(30));

INSERT INTO store (name,budget,address)VALUES
('store1','10000','address11');


CREATE TABLE product(
   id SERIAL PRIMARY KEY,
   name VARCHAR(70) NOT NULL,description varchar(120)
);

INSERT INTO product(name,description)  VALUES (‘apple','green apple');
INSERT INTO product(name,description)  VALUES (‘soda','ordinary soda’);
INSERT INTO product(name,description)  VALUES (‘milk,'milk for kids');

CREATE TABLE vendor
(
  id SERIAL PRIMARY KEY,
name VARCHAR(20),
phone VARCHAR(12),
email_address VARCHAR(30));

INSERT INTO vendor(name,phone,email_address)VALUES
 ('vendor1','045689811','vendor1@mail.ru'),
('vendor2','045689822','vendor2@mail.ru'),
('vendor3','045689833','vendor3@mail.ru');


CREATE TABLE manufactur
(
  id SERIAL PRIMARY KEY,
name VARCHAR(20),
phone VARCHAR(12),
address VARCHAR(90));

INSERT INTO manufactur(name,phone,address)VALUES
 ('manufactur1','045689111','address1'),
('manufactur2','045689222','address2'),
('manufactur3','045689333','address3');


CREATE TABLE customer
 (id SERIAL PRIMARY KEY,
name VARCHAR(20),
budget FLOAT(10),
email VARCHAR(20),
phone varchar(12));

INSERT INTO customer(name,budget,email,phone) VALUES 
('customer1','35000','customer1@mail.ru','045689861'),
('customer2','5000','customer2@mail.ru','045689862'),
('customer3','50000','customer3@mail.ru','045689863');


CREATE TABLE order(
id SERIAL PRIMARY KEY,
customer_id INTEGER NOT NULL REFERENCES customers(id),
store_id INTEGER NOT NULL REFERENCES shops(id));


ALTER TABLE  vendor ADD COLUMN password VARCHAR  NOT NULL

UPDATE vendor SET password='pass111***' WHERE id=1

INSERT INTO vendor (name,phone,email_address, password) VALUES ('vendor2','045689822','vendor2@mail.ru',crypt('password', gen_s
 alt('bf')));   


 INSERT INTO vendor (name,phone,email_address,password,birth_date) VALUES ('vendor','045689800','vendor@mail.ru','pass000***',EXTRACT(YEAR FROM CURRENT_DATE) – 21);



