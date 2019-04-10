DROP DATABASE IF EXISTS dashing;
CREATE DATABASE dashing;

\c dashing

CREATE TABLE services(
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE skills(
  id SERIAL PRIMARY KEY,
  skill_name VARCHAR,
  service_id INT REFERENCES services(id) ON DELETE CASCADE
);

CREATE TABLE providers (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  avatar TEXT,
  borough TEXT,
  phone_number VARCHAR,
  website_link VARCHAR
);

CREATE TABLE services_provider(
  id SERIAL PRIMARY KEY,
  service_id INT REFERENCES services(id) ON DELETE SET NULL,
  provider_id INT REFERENCES providers(id) ON DELETE SET NULL
);

CREATE TABLE skills_provider(
    id SERIAL PRIMARY KEY,
    skill_id  INT REFERENCES skills(id) ON DELETE SET NULL,
    provider_id INT REFERENCES providers(id) ON DELETE SET NULL,
    price_min INT,
    price_max INT,
    education BOOLEAN
);

CREATE TABLE porfolio (
    id SERIAL PRIMARY KEY,
    provider_id INT REFERENCES providers(id) ON DELETE SET NULL,
    img VARCHAR
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

-- CREATE TABLE education (
--   id SERIAL PRIMARY KEY,
--   teach BOOLEAN,
--   provider_id INT REFERENCES providers(id) ON DELETE SET NULL,
--   skill_id INT REFERENCES skills(id) ON DELETE SET NULL,
--   education_img TEXT
-- );

INSERT INTO services(name)
VALUES('Hair'),
('Makeup'),
('Nails'),
('Barber');

INSERT INTO skills(skill_name, service_id)
VALUES('Highlights', 1),
('Eyebrow shaping', 4),
('Mani/Pedi', 2),
('Glam Makeup', 4),
('Nail Art', 2),
('Sew In', 1), 
('Retwist', 1), 
('Acrylic', 2), 
('Fade', 3), 
('Trim', 3 ),
('Facial Hair Grooming', 3),
('Wedding Makeup', 4);

INSERT INTO providers (name, email, password, avatar, borough, phone_number, website_link)
VALUES('Nielene Keys', 'nkeys@gmail.com', 'nkeys', 'https://pixel.nymag.com/imgs/fashion/daily/2018/08/17/magazine/tessa-thompson-1.w570.h712.jpg', 'Brooklyn', '34759998433', null),
('Isa Frias', 'irico@gmail.com', 'irico', 'https://assets.teenvogue.com/photos/55fada5fda9bc0e85547e428/master/pass/latina-girls.jpg', 'Bronx', '34759998433', null),
('Bayne Brian', 'bbrian@gmail.com', 'bbrian', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2017%2F11%2Fkofi-siriboe-peopledotcom1.jpg&w=400&c=sc&poi=face&q=85', 'New York','7189875674', null),
('Jo West', 'jwest@gmail.com', 'jwest', 'https://pmcvariety.files.wordpress.com/2015/11/tessa-thompson-creed-q-and-a.jpg?w=1000&h=563&crop=1', 'Queens', '34759998433', null),
('Carina Salvador','csalvador@gmail.com', 'csalvador',  'http://content2.latest-hairstyles.com/wp-content/uploads/2015/07/RadReasonsToEmbraceNaturalCurl-500x333-14379420002.jpg', 'Staten Island', '34759998433', null);



INSERT INTO portfolio(provider_id, img)
VALUES (1, 'https://i.pinimg.com/originals/e5/e6/34/e5e634a0efeada0eab1096fef851ecbe.jpg'),
 (1, 'https://www.blushblowoutbar.com/wp-content/uploads/2016/08/blowouts.jpg'), 
 (1, 'http://www.cuded.com/wp-content/uploads/2017/03/chrome-nail-42.jpg'),
 (2, 'http://www.cuded.com/wp-content/uploads/2017/03/chrome-nail-42.jpg')

-- INSERT INTO education (teach, skill_id, provider_id, education_img)
-- VALUES('true', 1, 1, null),
-- ('true', 2, 2, null),
-- ('true', 3, 3, null),
-- ('true', 4, 4, null),
-- ('true', 5, 5, null);
