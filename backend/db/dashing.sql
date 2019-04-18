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
  bio TEXT,
  service_id INT REFERENCES services(id) ON DELETE CASCADE
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

INSERT INTO providers (name, email, password, avatar, borough, phone_number, website_link, bio, service_id)
VALUES('Nielene Keys', 'nkeys@gmail.com', 'nkeys', 'https://i0.wp.com/ranktribe.com/custom/domain_1/image_files/sitemgr_photo_10665.jpg?resize=297%2C297', 'Brooklyn', '347-599-9843', 'www.nkeys.com', 'I love doing nails!', 2),
('Isa Frias', 'irico@gmail.com', 'irico', 'https://assets.teenvogue.com/photos/55fada5fda9bc0e85547e428/master/pass/latina-girls.jpg', 'Bronx', '347-599-9843', 'www.isafrias.com', 'I love to do hair!', 1),
('Bayne Brian', 'bbrian@gmail.com', 'bbrian', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2017%2F11%2Fkofi-siriboe-peopledotcom1.jpg&w=400&c=sc&poi=face&q=85', 'Manhattan','7189875674', 'www.baynebrian.com', 'I''m the best barber in NY fam!', 3),
('Jo West', 'jwest@gmail.com', 'jwest', 'https://i-h2.pinimg.com/564x/a1/cb/81/a1cb814979c87ec8f7b252b299c75343.jpg', 'Queens', '347-599-9843', 'www.jowest.com', 'Jo is here to take care of you', 1),
('Carina Salvador','csalvador@gmail.com', 'csalvador', 'https://static1.squarespace.com/static/585862a3e6f2e134f2aa6e3e/t/58b87bf6d2b8579db55b0e57/1488485395205/', 'Staten Island', '347-599-9843', 'www.carinabeauty.com', 'Im here to meet all your beauty needs', 4),
('Sheree Love', 'shereelove@gmail.com', 'sheloves', 'https://www.styleseat.com/m/p/744413/photo/2494191', 'Brooklyn', '212-769-2000', 'www.beautybysheree.com', 'Let me take care of all your needs!', 2),
('Brianna Thomas', 'bree@gmail.com', 'bree', 'https://i.dailymail.co.uk/i/pix/2017/02/02/21/3CB97D1300000578-0-One_of_the_beautiful_people_Actress_Angelina_Jolie_Photography_h-a-132_1486072162004.jpg', 'Queens', '646-769-2000', 'www.beautybybree.com', 'Let me take care of all your needs!', 3),
('Micah Douglas', 'Micah@gmail.com', 'micah', 'https://cdn7.whiskeyriff.com/wp-content/uploads/sam_hunt_beard_0_1441190712.jpg', 'Bronx', '646-769-2000', 'www.micahdouglashair.com', 'Best Barber in the Business!', 3),
('Samantha Clement', 'sammy@gmail.com', 'sammy', 'https://i.pinimg.com/236x/e1/6d/70/e16d7087621fbcabdcd4481def7317c7.jpg', 'Manhattan', '646-769-2000', 'www.sammydoeshair.com', 'Professional looking to take care of you!', 1),
('Cammy Camz', 'cammycamz@gmail.com', 'cammy', 'https://data.whicdn.com/images/286416713/superthumb.png?t=1494258357', 'Staten Island', '646-769-2000', 'www.cammydoeshair.com', 'Best Hair Stylist in the Business!', 1),
('Loosey Lou', 'loosey@gmail.com', 'lolz', 'https://amp.businessinsider.com/images/5a8d6cfcf22fa92b008b46d8-960-720.jpg', 'Brooklyn', '646-769-2000', 'www.lousnails.com', 'Nail tech looking to get some work!', 2),
('Hadda Babyitsaboy', 'hbmua@gmail.com', 'muatoday', 'https://amp.businessinsider.com/images/5a8d77a5391d941d008b461a-960-720.jpg', 'Queens', '646-769-2000', 'www.lousnails.com', 'Wedding glam makeup and all the works!', 4),
('Nikki Vee', 'nikki@gmail.com', 'nikki', 'https://data.whicdn.com/images/153050864/superthumb.jpg?t=1419377844', 'Brooklyn', '646-769-2000', 'www.nikkiveenails.com', 'Makeup and all the works!', 4),
('Dianna Rossman', 'drnails@gmail.com', 'drnails', 'https://i.pinimg.com/736x/ce/71/ca/ce71ca421ed47b5d9e22b9b36a7486d7--pretty-people-beautiful-people.jpg', 'Manhattan', '646-769-2000', 'www.drnails.com', 'Nails and all the works!', 2);



-- https://pmcvariety.files.wordpress.com/2015/11/tessa-thompson-creed-q-and-a.jpg?w=1000&h=563&crop=1

INSERT INTO services_provider(service_id, provider_id)
VALUES(1,1), (2,1), (2,2), (4,2), (3,3), (4,4), (1,4), (1,5), (3,5), (2,14), (2,11), (1,11), (1,10), (1,9), (3,7), (2,4), (3,8), (1,8), (2,6), (1,6), (4,13), (1,14), (1,12), (3,12);

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
(11, 5, 20, 25, 'true'), --barber
(4, 4, 20, 25, 'true'), -- hair
(20, 5, 25, 40, 'false'), --makeup
(8, 14, 20, 25, 'true'), --Nails
(18, 13, 20, 25, 'true'), --Makeup
(16, 12, 20, 25, 'false'), --Makeup
(11, 8, 20, 25, 'true'), --barber
(14, 7, 10, 25, 'false'), --makeup
(19, 12, 45, 100, 'true'), --makeup
(3, 10, 30, 50, 'true'), --hair
(10, 11, 50, 85, 'false'), --nails
(9, 6, 30, 55, 'false'), --Nails
(3, 9, 60, 150, 'false'), --hair



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
