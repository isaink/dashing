DROP DATABASE IF EXISTS dashing;
CREATE DATABASE dashing;

\c dashing

CREATE TABLE services(
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE skills(
  id SERIAL PRIMARY KEY,
  name VARCHAR,
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
  website_link VARCHAR, 
  bio TEXT
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

CREATE TABLE portfolio (
    id SERIAL PRIMARY KEY,
    provider_id INT REFERENCES providers(id) ON DELETE SET NULL,
    img VARCHAR,
    body VARCHAR,
    skill_id INT REFERENCES skills(id) ON DELETE SET NULL
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

INSERT INTO services(name)
VALUES('Hair'),
('Nails'),
('Barber'),
('Makeup');

INSERT INTO skills (name, service_id)
VALUES('Coloring' , 1),
('Weaves' , 1),
('Locks' , 1),
('Perms' , 1),
('Cut' , 1),
('Nail Art' , 2),
('Shaping' , 2),
('Mani/Pedi' , 2),
('Tips' , 2),
('Gel Nails' , 2),
('Trim' , 3),
('Cut' , 3),
('Fade' , 3),
('Blowout' , 3),
('Facial Hair Grooming' , 3),
('Brow shaping' , 4),
('Glam' , 4),
('Natural' , 4),
('Wedding' , 4),
('Sugaring' , 4);

INSERT INTO providers (name, email, password, avatar, borough, phone_number, website_link, bio)
VALUES('Nielene Keys', 'nkeys@gmail.com', 'nkeys', 'https://i0.wp.com/ranktribe.com/custom/domain_1/image_files/sitemgr_photo_10665.jpg?resize=297%2C297', 'Brooklyn', '34759998433', null, 'I love doing nails'),
('Isa Frias', 'irico@gmail.com', 'irico', 'https://assets.teenvogue.com/photos/55fada5fda9bc0e85547e428/master/pass/latina-girls.jpg', 'Bronx', '34759998433', null, 'hair is great'),
('Bayne Brian', 'bbrian@gmail.com', 'bbrian', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2017%2F11%2Fkofi-siriboe-peopledotcom1.jpg&w=400&c=sc&poi=face&q=85', 'New York','7189875674', null, 'Im the best barber in NY fam'),
('Jo West', 'jwest@gmail.com', 'jwest', 'https://i-h2.pinimg.com/564x/a1/cb/81/a1cb814979c87ec8f7b252b299c75343.jpg', 'Queens', '34759998433', null, 'Jo is here to take care of you'),
('Carina Salvador','csalvador@gmail.com', 'csalvador', 'https://static1.squarespace.com/static/585862a3e6f2e134f2aa6e3e/t/58b87bf6d2b8579db55b0e57/1488485395205/', 'Staten Island', '34759998433', null, 'Im here to meet all your beauty needs');

-- https://pmcvariety.files.wordpress.com/2015/11/tessa-thompson-creed-q-and-a.jpg?w=1000&h=563&crop=1

INSERT INTO services_provider(service_id, provider_id)
VALUES(1,1), (2,1), (2,2), (4,2), (3,3), (4,4), (1,4), (1,5), (3,5);

INSERT INTO skills_provider (skill_id, provider_id, price_min, price_max, education)
VALUES(1, 1, 50, 70, 'true'), --hair
(2, 1, 80, 100, 'true'), --Hair
(6, 1, 20, 30, 'false'), --nails
(7, 1, 15, 25, 'false'), --nails
(8, 2, 20, 25, 'true'), --nails
(9, 2, 20, 30, 'true'), --nails
(16, 2, 15, 20, 'true'), --makeup
(17, 2, 30, 40, 'true'), --makeup
(11, 3, 15, 20, 'false'), --barber
(12, 3, 20, 30, 'false'), --barber
(13, 3, 20, 25, 'true'), --barber
(14, 3, 12, 18, 'true'), --barber
(18, 4, 20, 30, 'true'), --makeup
(19, 4, 30, 40, 'true'), --makeup
(3, 4, 50, 70, 'false'), --hair
(4, 4, 30, 40, 'false'), --hair
(5, 5, 20, 50, 'true'), --hair
(1, 5, 30, 40, 'true'), --hair
(15, 5, 20, 45, 'true'), --barber
(11, 5, 20, 25, 'true'); --barber

INSERT INTO portfolio(provider_id, img, body, skill_id)
VALUES (1, 'https://i.pinimg.com/originals/e5/e6/34/e5e634a0efeada0eab1096fef851ecbe.jpg', null, null),
  (1, 'https://www.blushblowoutbar.com/wp-content/uploads/2016/08/blowouts.jpg', null, null),
  (2, 'http://www.cuded.com/wp-content/uploads/2017/03/chrome-nail-42.jpg', null, null),
  (2, 'http://tdolanplumbing.com/wp-content/uploads/parser/nail-art-designs-for-short-nails-1.jpg', null, null),
  (3, 'https://www.menshairstylestoday.com/wp-content/uploads/2016/12/Edge-Up-Burst-Fade-Curly-Afro.jpg', null, null),
  (3, 'https://www.menshairstylestoday.com/wp-content/uploads/2016/12/Edge-Up-Burst-Fade-Curly-Afro.jpg', null, null),
  (3, 'https://www.menshairstyletrends.com/wp-content/uploads/2018/05/tote_barber-mohawk-fade-hairstyles-for-men-2018.jpg', null, null),
  (4, 'https://i-h2.pinimg.com/564x/a1/cb/81/a1cb814979c87ec8f7b252b299c75343.jpg', null, null),
  (4, 'https://www.miladies.net/wp-content/uploads/2017/07/Neutral-glam-makeup.jpg', null, null),
  (4, 'http://lawyerfind.info/wp-content/uploads/best-purple-hair-dye-for-brown-hair-purple-and-magenta-hair-color-colorful-hair-pinterest-magenta.jpg', null, null),
  (5, 'http://jpmmobile.com/wp-content/uploads/2018/11/40-braids-for-black-kids-2018-mr-kids-haircuts-braids-for-black-kids.jpg', null, null),
  (5, 'https://4cjz9s2texp5a66rp37l3uty-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/1492699004/bashab___12224424_252504998425062_1601193227_n-2.jpg', null, null),
  (5, 'https://www.menshairstylestoday.com/wp-content/uploads/2018/03/Black-Men-Hairstyles.jpg', null, null);
