DROP DATABASE IF EXISTS dashing;
CREATE DATABASE dashing;
\c dashing

CREATE TYPE userType AS ENUM ( 'provider', 'client');

CREATE TABLE services(
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE skills(
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  service_id INT REFERENCES services(id) ON DELETE CASCADE
);

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  password_digest VARCHAR NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  avatar TEXT,
  borough TEXT,
  phone_number VARCHAR,
  website_link VARCHAR,
  bio TEXT,
  service_id INT REFERENCES services(id) ON DELETE CASCADE,
  availability TEXT,
  type userType
);

CREATE TABLE services_provider(
  id SERIAL PRIMARY KEY,
  service_id INT REFERENCES services(id) ON DELETE SET NULL,
  user_id INT REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE skills_provider(
    id SERIAL PRIMARY KEY,
    skill_id  INT REFERENCES skills(id) ON DELETE SET NULL,
    user_id INT REFERENCES users(id) ON DELETE SET NULL,
    price_min INT,
    price_max INT,
    education BOOLEAN
);

CREATE TABLE portfolio (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE SET NULL,
    img VARCHAR,
    body VARCHAR,
    skill_id INT REFERENCES skills(id) ON DELETE SET NULL
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

INSERT INTO users (first_name, last_name, password_digest, email, avatar, borough, phone_number, website_link, bio, service_id, type, availability)
VALUES('Nielene', 'Keys', 'nkeys', 'nkeys@gmail.com',  'https://i0.wp.com/ranktribe.com/custom/domain_1/image_files/sitemgr_photo_10665.jpg?resize=297%2C297', 'Brooklyn', '347-599-9843', 'www.nkeys.com', 'I love doing nails!', 2, null, 'Mon - Thurs 10-6'),
('Isa', 'Frias', 'irico', 'irico@gmail.com',  'https://assets.teenvogue.com/photos/55fada5fda9bc0e85547e428/master/pass/latina-girls.jpg', 'Bronx', '347-599-9843', 'www.isafrias.com', 'I love to do hair!', 1, null, 'Sat - Tues 3 - 9'),
('Bayne', ' Brian', 'bbrian', 'bbrian@gmail.com', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2017%2F11%2Fkofi-siriboe-peopledotcom1.jpg&w=400&c=sc&poi=face&q=85', 'Manhattan','7189875674', 'www.baynebrian.com', 'I''m the best barber in NY fam!', 3, null, 'Sun - Thurs 2 - 9 '),
('Jo', 'West', 'jwest', 'jwest@gmail.com', 'https://i-h2.pinimg.com/564x/a1/cb/81/a1cb814979c87ec8f7b252b299c75343.jpg', 'Queens', '347-599-9843', 'www.jowest.com', 'Jo is here to take care of you', 1, null, 'Mon - Thurs 11 - 7'),
('Carina', 'Salvador', 'csalvador','csalvador@gmail.com',  'https://static1.squarespace.com/static/585862a3e6f2e134f2aa6e3e/t/58b87bf6d2b8579db55b0e57/1488485395205/', 'Staten Island', '347-599-9843', 'www.carinabeauty.com', 'Im here to meet all your beauty needs', 4, null, 'Mon - Fri 10 - 7'),
('Channy', 'Styles', 'channystyles', 'channystyles@gmail.com',  'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/71732_446752851221_6737560_n.jpg?_nc_cat=109&_nc_oc=AQnBLTtsTVHV9U2ho6WqGEQY5VTSxi4pjhkycI-hOKIaJSZZQlKRJVu6WsTJiZQ3oqc&_nc_ht=scontent-lga3-1.xx&oh=f47011313f8a95f23c17a3a2d1a1608f&oe=5D37A50F', 'Brooklyn', '212-769-2000', 'www.channystyles.com', 'Let me take care of all your needs!', 1, null, 'Sun - Thurs 11 - 7'),
('Brianna', 'Thomas', 'bree', 'bree@gmail.com', 'https://i.dailymail.co.uk/i/pix/2017/02/02/21/3CB97D1300000578-0-One_of_the_beautiful_people_Actress_Angelina_Jolie_Photography_h-a-132_1486072162004.jpg', 'Queens', '646-769-2000', 'www.beautybybree.com', 'Let me take care of all your needs!', 3, null, 'Mon - Fri 2 - 8'),
('Micah', 'Douglas', 'micah', 'Micah@gmail.com',  'https://cdn7.whiskeyriff.com/wp-content/uploads/sam_hunt_beard_0_1441190712.jpg', 'Bronx', '646-769-2000', 'www.micahdouglashair.com', 'Best Barber in the Business!', 2, null, 'Weds - Sun 10 - 7'),
('Samantha', 'Clement', 'sammy', 'sammy@gmail.com',  'https://i.pinimg.com/236x/e1/6d/70/e16d7087621fbcabdcd4481def7317c7.jpg', 'Manhattan', '646-769-2000', 'www.sammydoeshair.com', 'Professional looking to take care of you!', 1, null, 'Tues - Fri 12 - 9'),
('Cammy', 'Camz', 'cammy', 'cammycamz@gmail.com',  'https://data.whicdn.com/images/286416713/superthumb.png?t=1494258357', 'Staten Island', '646-769-2000', 'www.cammydoeshair.com', 'Best Hair Stylist in the Business!', 1, null, 'Mon - Fri 2 - 9'),
('Loosey', 'Lou', 'lolz', 'loosey@gmail.com',  'https://amp.businessinsider.com/images/5a8d6cfcf22fa92b008b46d8-960-720.jpg', 'Brooklyn', '646-769-2000', 'www.lousnails.com', 'Nail tech looking to get some work!', 2, null, 'Tues - Sun 10 - 6'),
('Hadda', 'Babyitsaboy',  'muatoday', 'hbmua@gmail.com', 'https://amp.businessinsider.com/images/5a8d77a5391d941d008b461a-960-720.jpg', 'Queens', '646-769-2000', 'www.lousnails.com', 'Wedding glam makeup and all the works!', 4 , null, 'Mon - Fri 12 - 9'),
('Nikki', 'Vee', 'nikki',  'nikki@gmail.com',  'https://data.whicdn.com/images/153050864/superthumb.jpg?t=1419377844', 'Bronx', '646-769-2000', 'www.nikkiveenails.com', 'Makeup and all the works!', 4, null, 'Weds - Sun 11 - 7'),
('Dianna', 'Rossman', 'drnails', 'drnails@gmail.com', 'https://i.pinimg.com/736x/ce/71/ca/ce71ca421ed47b5d9e22b9b36a7486d7--pretty-people-beautiful-people.jpg', 'Manhattan', '646-769-2000', 'www.drnails.com', 'Nails and all the works!', 2, null, 'Sun - Thurs 11 - 8'),
('Charlie', 'Adams', 'cadadams@gmail.com', 'random', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0EZBXiftaUy0oAOuGqdke5Gj5EkWSSi66syjO7OdzIEbvVryT', 'Brooklyn', null, 'cadams.com', 'Let me make you look your best!', 3, null, 'Mon - Fri 12 - 9'),
('Danielle', ' Cohen', 'idaniel', 'dCohen@gmail.com',  'https://nordichairawards.com/wp-content/uploads/2018/10/Men-Categories_Nordic_Hair_Awards4.jpg', 'Bronx', '671-923-2301', 'danielcohen.com', 'I am passionate about making people look their best.', 3, null, 'Sun - Mon 9 - 5'),
('Amanda ', 'Richards', 'somethingorother', 'idoitall@yahoo.com',  'https://cache.desktopnexus.com/thumbseg/274/274492-bigthumbnail.jpg', 'Staten Island', '212-907-8234', 'amandastyles.com', 'With me you''re in experienced hands', 3, null, 'Sun - Thurs 10 - 6'),
('Sam', 'Linda', 'youcantguess', 'samlinds@ymail.com' ,'http://www.starstyle.ph/wp-content/uploads/2018/01/kimcamjones-featured-image.jpg', 'Manhattan', '532-809-7654', 'twofirstnames.com', 'Making you feel and look your best is my passion! ', 4, null, 'Mon - Sun 9 - 6'),
('Felix', 'Hernandez',  'mynameisfe', 'fhernandez@yahoo.com', 'https://ikemitu.net/wp-content/uploads/2018/10/handsome-hairstyle-images-awesome-latest-haircuts-for-men-handsome-hair-fashion-men-beard-0d-of-handsome-hairstyle-images.jpg', 'Manhattan', '617-890-6752', 'killerstyles.com', 'Trust me to make you look your best!', 3, null, 'Tues - Fri 11 - 7'),
('Arielle', 'Lopez', 'stillkiller',  'aridari@gmail.com', 'http://www.gbox.co.nz/images/category_1/Animal%20Killer%20Women%20GreyTshirt%20Wellcoda%20635_3.jpg', 'Bronx', '890-765-4678', 'ariellecuts.com', 'In my hands you''ll look like a rockstar', 1, null, 'Sun - Weds 4- 11'),
('Thomas', 'Avery', 'ABSTRACT','thomasdoesthething@ymail.com','https://i.redd.it/btbqnq05yq111.jpg', 'Queens', '718-346-7892', 'nailsandthings', 'I have dozens of happy clients! Please join the family', 2, null, 'Mon - Thurs 9 - 7'),
('Diana', 'Williams', '12guess', 'dianawill@yahoo.com', 'https://www.nkdreamworld.com/wp-content/uploads/2018/08/34868647_1833367416971392_6645010805794275328_n.jpg', 'Queens', '723-678-9203', 'dianahooksitup.com', 'Making others look good makes me feel good and is what I am all about.', 2, null, 'Sun - Thurs 12 - 9'),
('Robert', 'Baratheon', 'youdontknow', 'robhob@yahoo.com', 'https://qph.fs.quoracdn.net/main-qimg-4f59f93609b8bae16e30029e2a2f2482.webp', 'Manhattan', '987-647-8902', 'buzzandcut.com', 'Once you experience my level of customer care you will keep coming back!', 4, null, 'Sun - Weds 11- 6'),
('Elizabeth', 'Long', 'farfromhere', 'elliebelly@gmail.com', 'https://images.pexels.com/photos/1892511/pexels-photo-1892511.jpeg?cs=srgb&dl=attractive-beautiful-beauty-1892511.jpg&fm=jpg', 'Manhattan', '789-023-7643', 'EllieDyes.com', 'After being my client you''''ll never want anyone else!', 2, null, 'Tues - Thurs 11 - 8'),
('Cindy', 'Lopez', 'cindyl', 'cincity@ymail.com', 'https://images.express.com/is/image/expressfashion/0006_00279674_0098?cache=on&wid=361&fmt=jpeg&qlt=75,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon', 'Manhattan', '783-450-9876', 'cinfulstyle.com', 'Making people look their best is my passion!', 2, null, 'Mon - Fri 11 - 8');

INSERT INTO services_provider(service_id, user_id)
VALUES(1,1), (2,2), (4,2), (3,3),(1,3), (3,1), (4,4), (1,4), (1,5), (3,5), (2,14), (2,11), (1,11), (4, 9), (1,10), (3, 10), (1,9), (3,7), (2, 7), (2,4), (3,8), (1,8), (2,6), (1,6), (4,13),(1, 13), (1,14), (1,12), (3,12), (3, 15), (1, 15), (2, 16), (4, 16), (3, 17), (1, 17), (2, 18), (4, 18), (2, 19), (1, 19), (2, 20), (4, 20), (2, 21), (3, 21), (4, 22), (1, 22), (2, 23), (1, 23), (1, 24), (4, 24), (1, 25), (4, 25) ;

INSERT INTO skills_provider (skill_id, user_id, price_min, price_max, education)
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
(6, 6, 25, 30, 'false'),--- nails
(18, 6, 60, 100, 'true'), ---makeup
(15, 6, 15, 30, 'false'), --- barber
(20, 7, 20, 80, 'true'), --- makeup
(11, 7, 20, 40, 'true'), --- barber,
(13, 7, 20, 25, 'false'), ---barber
(2, 8, 40, 80, 'true'), --- barber
(3, 8, 40, 50, 'false'), ---hair
(1, 8, 50, 100, 'true'), ---hair
(17, 9, 30, 60, 'false'),---makeup
(1, 9, 30, 70, 'true'),---hair
(2, 9, 40, 90, 'true'),---hair
(14, 10, 30, 40, 'false'), ---barber
(4, 10, 50, 60, 'false'), ---hair
(1, 10, 30, 80, 'true'),---hair
(7, 11, 50, 80, 'true'), ---nails
(16, 11, 50, 80, 'true'), ---makeup
(3, 11, 50, 100, 'false'), ---hair
(12, 12, 20, 40, 'false'), ---barber
(3, 12, 40, 60, 'true'), ---hair
(14, 12, 30, 50, 'true'), ---barber
(3, 13, 30, 70, 'false'), ---hair
(17, 13, 40, 60, 'true'), ---makeup
(18, 13, 50, 80, 'false'), ---makeup
(6, 14, 30, 50, 'true'), ---nails
(2, 14, 30, 60, 'true'), ---hair
(5, 14, 40, 80, 'true'), ---hair
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
(12, 15, 20, 35, 'true'), ---barber
(13, 15, 15, 25, 'true'), ---barber
(15, 15, 20, 30, 'false'), ---barber
(2, 15, 30, 50, 'true'), ---hair
(1, 15, 20, 80, 'false'), ---hair
(4, 15, 30, 60, 'true'), ---hair
(3, 15, 20, 60, 'false'), ---hair
(7, 16, 30, 50, 'true'), ---nails
(9, 16, 30, 60, 'false'), ---nails
(8, 16, 20, 40, 'true'), ---nails
(17, 16, 30, 70, 'true'), ---makeup
(19, 16, 25, 40, 'false'), --- makeup
(16, 16, 30, 50, 'true'), ---makeup
(12, 17, 20, 40, 'false'), ---barber
(14, 17, 15, 30, 'true'), ---barber
(11, 17, 20, 35, 'false'), ---barber
(18, 17, 30, 50, 'true'), ---makeup
(20, 17, 30, 70, 'false'), ---makeup
(16, 17, 40, 70, 'true'), ---makeup
(7, 18, 30, 60, 'true'), ---nails
(10, 18, 40, 80, 'false'), ---nails
(9, 18, 25, 50, 'true'), ---nails
(18, 18, 40, 50, 'false'), ---makeup
(17, 18, 30, 50, 'true'), ---makeup
(19, 18, 30, 50, 'false'), ---makeup
(2, 19, 40, 70, 'true'), ---hair
(4, 19, 30, 50, 'false'), ---hair
(1, 19, 24, 50, 'true'), ---hair
(8, 19, 20, 50, 'false'), ---nails
(7, 19, 40, 90, 'true'), ---nails
(6, 19, 20, 40, 'false'), ---nails
(8, 20, 30, 50, 'true'), ---nails
(7, 20, 20, 40, 'false'), ---nails
(10, 20, 40, 50, 'false'), ---nails
(17, 20, 30, 40, 'false'), ---makeup
(19, 20, 30, 50, 'true'), ---makeup
(20, 20, 40, 60, 'true'), ---makeup
(10, 21, 30, 50, 'false'), ---nails
(8, 21, 20, 50, 'false'), ---nails
(6, 21, 30, 60, 'true'), ---nails
(12, 21, 20, 50, 'false'), ---barber
(14, 21, 20, 40, 'true'), ---barber
(15, 21, 20, 40, 'false'), ---barber
(1, 22, 30, 50, 'true'), ---hair
(3, 22, 20, 40, 'false'), ---hair
(4, 22, 20, 50, 'true'), ---hair
(17, 22, 40, 60, 'true'), ---makeup
(19, 22, 30, 50, 'false'), ---makeup
(20, 22, 30, 70, 'true'), ---makeup
(6, 23, 30, 60, 'false'), ---nails
(9, 23, 20, 50, 'true'), ---nails
(10, 23, 30, 50, 'true'), ---nails
(4, 23, 25, 60, 'false'), ---hair
(5, 23, 40, 70, 'true'), ---hair
(2, 23, 30, 60, 'true'), ---hair
(2, 24, 30, 60, 'false'), ---hair
(4, 24, 30, 70, 'true'), ---hair
(1, 24, 20, 60, 'true'), ---hair
(18, 24, 25, 50, 'false'), ---makeup
(20, 24, 20, 60, 'true'), ---makeup
(16, 24, 30, 60, 'false'), ---makeup
(3, 25, 20, 50, 'true'), ---hair
(1, 25, 20, 60, 'true'), ---hair
(4, 25, 40, 70, 'false'), ---hair
(17, 25, 20, 60, 'true'), ---makeup
(19, 25, 30, 70, 'false'), ---makeup
(16, 25, 30, 80, 'true'); ---makeup

INSERT INTO portfolio(user_id, img, body, skill_id)
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
  (5, 'https://www.menshairstylestoday.com/wp-content/uploads/2018/03/Black-Men-Hairstyles.jpg', null, null),
  (6, 'https://tinyurl.com/y37njtfh', null, null),
  (6, 'https://tinyurl.com/yyqagcrl', null, null),
  (7, 'https://tinyurl.com/y6gwhcka', null, null),
  (7, 'https://tinyurl.com/y56k6cu2', null, null),
  (8, 'https://tinyurl.com/y4y7ccxd', null, null),
  (8, 'https://tinyurl.com/y6gwhcka', null, null),
  (9, 'https://tinyurl.com/y4fssmvh' , null, null),
  (9, 'https://tinyurl.com/y4gdwrwl', null, null),
  (10, 'https://tinyurl.com/y5rbrowj', null, null),
  (10, 'https://tinyurl.com/y4bwezmc', null, null),
  (11, 'https://tinyurl.com/y33jtox3', null, null),
  (11, 'https://tinyurl.com/yy8vp7gp', null, null),
  (12, 'https://tinyurl.com/y5dxg22b', null, null),
  (12, 'https://tinyurl.com/yyf9muw4', null, null),
  (13, 'https://tinyurl.com/y54y22le', null, null),
  (13, 'https://tinyurl.com/yynypmx9', null, null),
  (14, 'https://tinyurl.com/yxjcdxu7', null, null),
  (14, 'https://tinyurl.com/y5y69r8p', null, null);
