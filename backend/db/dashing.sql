DROP DATABASE IF EXISTS dashing;
CREATE DATABASE dashing;

\c dashing

CREATE TABLE services(
  id SERIAL PRIMARY KEY,
  s_name TEXT,
  price FLOAT,
  duration INT,
  service_img TEXT
);

CREATE TABLE skills(
  id SERIAL PRIMARY KEY,
  skill_name VARCHAR,
  service_id INT REFERENCES services(id) ON DELETE CASCADE
);

CREATE TABLE providers (
  id SERIAL PRIMARY KEY,
  p_name TEXT,
  profile_pic TEXT,
  email TEXT,
  p_password TEXT,
  phone_number VARCHAR,
  borough TEXT,
  service_id INT REFERENCES services(id) ON DELETE SET NULL,
  skill_id INT REFERENCES skills(id) ON DELETE SET NULL,
  port_img_1 TEXT,
  port_img_2 TEXT,
  port_img_3 TEXT
);

CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  c_name TEXT,
  c_address TEXT,
  borough TEXT,
  c_state TEXT,
  email TEXT,
  phone_number VARCHAR,
  lat FLOAT,
  long FLOAT
);

CREATE TABLE education (
  id SERIAL PRIMARY KEY,
  teach BOOLEAN,
  provider_id INT REFERENCES providers(id) ON DELETE SET NULL,
  skill_id INT REFERENCES skills(id) ON DELETE SET NULL,
  education_img TEXT
);


INSERT INTO services(s_name, price, duration, service_img)
VALUES('Hair', '100.00', 60, 'https://www.aveda.com.au/media/export/cms/hair_color_landing/HCL_Header_mobile3.jpg'),
('Makeup', '70.00', 40, 'https://flashmode.org/wp-content/uploads/2018/05/Best-Ideas-For-Makeup-Tutorials-Double-Eyeliner-Matte-Plum-Lips.jpg'),
('Nails', '60.00', 30, 'https://d1ic4altzx8ueg.cloudfront.net/finder-au/wp-uploads/2018/08/ad736c4e3e9fb79c1f325ab4c50581d6.jpg'),
('Barber', '110.00', 60, 'https://vbarbershop.com/wp-content/uploads/Lamar-1024x683.jpg');

INSERT INTO skills(skill_name, service_id)
VALUES('Highlights', 1),
('Eyebrow shaping', 2),
('Mani/Pedi', 3),
('Marking', 4),
('Nail Art', 3);

INSERT INTO providers (p_name, profile_pic, email, p_password, phone_number, borough, service_id, skill_id, port_img_1, port_img_2, port_img_3)
VALUES('Nielene Keys', 'https://pixel.nymag.com/imgs/fashion/daily/2018/08/17/magazine/tessa-thompson-1.w570.h712.jpg', 'nkeys@gmail.com', 'nkeys', '34759998433', 'Brooklyn', 1, 1, null , null, null),
('Carina Salvador', 'http://content2.latest-hairstyles.com/wp-content/uploads/2015/07/RadReasonsToEmbraceNaturalCurl-500x333-14379420002.jpg', 'csalvador@gmail.com', 'csalvador', '34759998433', 'Staten Island', 2, 1, null , null, null),
('Jo West', 'https://pmcvariety.files.wordpress.com/2015/11/tessa-thompson-creed-q-and-a.jpg?w=1000&h=563&crop=1', 'jwest@gmail.com', 'jwest', '34759998433', 'Queens', 3, 1, null , null, null),
('Bayne Brian', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2017%2F11%2Fkofi-siriboe-peopledotcom1.jpg&w=400&c=sc&poi=face&q=85', 'bbrian@gmail.com', 'bbrian', '7189875674', 'New York', 4, 1,null , null, null),
('Isa Frias', 'https://assets.teenvogue.com/photos/55fada5fda9bc0e85547e428/master/pass/latina-girls.jpg', 'irico@gmail.com', 'irico', '34759998433', 'Bronx', 3, 1, null , null, null);

INSERT INTO clients (c_name, c_address, borough, c_state, email, phone_number, lat, long)
VALUES('Jerome Wallace', '1050 Ocean Avenue', 'New York', 'New York', 'Jwallace@gmail.com', '3476095783', null, null),
('Andrea Thomas', '197 Chauncey Street', 'Brooklyn', 'New York', 'athomas@gmail.com', '3476090963', null, null),
('Anthony Andcleop', '', 'Staten Island', 'New York', 'Jwallace@gmail.com', '3476095783', null, null),
('Mark Wells', null, 'Bronx', 'New York', 'Jwallace@gmail.com', '3476095783', null, null),
('Franny Lima', null, 'Queens', 'New York', 'Jwallace@gmail.com', '3476095783', null, null);


INSERT INTO education (teach, skill_id, provider_id, education_img)
VALUES('true', 1, 1, null),
('true', 2, 2, null),
('true', 3, 3, null),
('true', 4, 4, null),
('true', 5, 5, null);
