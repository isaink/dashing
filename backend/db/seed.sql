DROP DATABASE IF EXISTS dashing;
CREATE DATABASE dashing;

\c dashing;

DROP TABLE IF EXISTS services;
DROP TABLE IF EXISTS providers;
DROP TABLE IF EXISTS clients;
DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS education;



CREATE TABLE services (
  id SERIAL PRIMARY KEY,
  service_name TEXT,
  price: FLOAT,
  duration: INT,
  service_img: TEXT
);

CREATE TABLE providers (
  id SERIAL PRIMARY KEY,
  p_name: TEXT,
  p_profile_pic: TEXT,
  p_email: TEXT,
  p_password: TEXT,
  p_phone_number: INT,
  p_borough: TEXT,
  service_id: INT REFERENCES services(id) ON DELETE SET NULL,
  skill_id: INT REFERENCES skills(id) ON DELETE SET NULL,
  p_port_img_1: TEXT,
  p_port_img_2: TEXT,
  p_port_img_3: TEXT
);

CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  c_name: TEXT,
  c_address: TEXT,
  c_borough: TEXT,
  c_state: TEXT,
  c_email: TEXT,
  c_phone_number: TEXT,
  c_lat: FLOAT,
  c_long: FLOAT
);

CREATE TABLE skills (
  id SERIAL PRIMARY KEY,
  skill_name TEXT,
  provider_id INT REFERENCES providers(id) ON DELETE CASCADE
);

CREATE TABLE education (
  id SERIAL PRIMARY KEY,
  lesson: TEXT,
  provider_id: INT REFERENCES providers(id) ON DELETE CASCADE,
  service_id: INT REFERENCES services(id) ON DELETE CASCADE,
  education_img: TEXT
);


INSERT INTO services (service_name, price, duration, service_img)
VALUES ('Hair', 100.00, 60, 'https://www.aveda.com.au/media/export/cms/hair_color_landing/HCL_Header_mobile3.jpg'),
('Makeup', 70.00, 40, 'https://flashmode.org/wp-content/uploads/2018/05/Best-Ideas-For-Makeup-Tutorials-Double-Eyeliner-Matte-Plum-Lips.jpg'),
('Nails', 60.00, 30, 'https://d1ic4altzx8ueg.cloudfront.net/finder-au/wp-uploads/2018/08/ad736c4e3e9fb79c1f325ab4c50581d6.jpg'),
('Barber', 110.00, 60, 'https://vbarbershop.com/wp-content/uploads/Lamar-1024x683.jpg');

INSERT INTO providers (p_name, p_profile_pic, p_email, p_password, p_phone_number, p_borough, service_id, skill_id, p_port_img_1, p_port_img_2, p_port_img_3)
VALUES ('Body Like a Back Road','https://s3.amazonaws.com/roughstock-production/2017/02/SamHuntBody610.jpg', 1, 5),
('Dangerous', 'https://i.ytimg.com/vi/gUevS9OJe0w/hqdefault.jpg', 2, 2),
('Patiently Waiting', 'https://i.pinimg.com/originals/c2/b7/f2/c2b7f237a7e834c0d9309900b921e3fa.jpg', 4, 3),
('I''m Only Human', 'https://i.pinimg.com/originals/0e/b2/e4/0eb2e499fef9a6f8d910ca8b48419e06.jpg', 4, 5),
('Somebody That I Used To Know', 'https://i1.sndcdn.com/artworks-000236054898-2q8n7u-t500x500.jpg', 10, 4),
('Like Ah Boss', 'https://i.ytimg.com/vi/1lh7IF6lK0g/maxresdefault.jpg', 7, 1),
('Girl Crush', 'https://upload.wikimedia.org/wikipedia/en/thumb/7/73/LBTGIRLCRUSHSINGLEART.jpg/220px-LBTGIRLCRUSHSINGLEART.jpg', 3, 5),
('Live Your Life', 'https://i.ytimg.com/vi/Yv9U5mgDekk/hqdefault.jpg', 4, 3),
('Miserable Life', 'https://m.media-amazon.com/images/I/91DGQGFYMKL._SS500_.jpg', 5, 2),
('Radica', 'https://i.ytimg.com/vi/yjngH8k2D9o/hqdefault.jpg', 8, 1),
('Just a Dream', 'http://www.sonicamp.com/images/videos/nelly_justadream.jpg', 1, 4),
('Redemption Song', 'https://i.ytimg.com/vi/TiKffuLyajQ/hqdefault.jpg', 6, 2),
('Kim', 'http://2.bp.blogspot.com/-Khj31GVsd90/VRqfUrJpnqI/AAAAAAAABE4/2ygNCZ-x_gw/s1600/Kim%2BBy%2BEminem%2B(DopeSong.blogspot.com).jpg', 5, 3),
('The Caribbean Man', 'https://img.discogs.com/gdzsFNNXQA-IW16VwTgNIJwLoD0=/fit-in/600x595/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5420990-1429466568-6623.jpeg.jpg', 9, 1),
('Medicine', 'https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2Fb1ba5c773e05f0cc14d03a73b78c95d8.503x503x1.jpg', 2, 4);

INSERT INTO clients (c_name, c_address, c_borough, c_state, c_email, c_phone_number, c_lat, c_long)
VALUES (1 , 1), (2 , 2), (3 , 3), (4 , 4), (5 , 5), (6 , 6), (7 , 7), (8 , 8), (9 , 9), (10 , 10),
(1 , 11), (2 , 12), (3 , 13), (4 , 14), (5 , 15), (6 , 1), (7 , 2), (8 , 3), (9 , 4), (10 , 5),
(1 , 6), (2 , 7), (3 , 8), (4 , 9), (5 , 10), (6 , 11), (7 , 12), (8 , 13), (9 , 14), (10 , 15),
(1 , 15), (2 , 14), (3 , 1), (4 , 12), (5 , 11), (6 , 10), (7 , 9), (8 , 4), (9 , 7), (10 , 6),
(1 , 7), (2, 8), (3, 7);


INSERT INTO skills (name, provider_id)
VALUES ('good song' , 1, 1), ('ear splitting' , 1, 11),
('i liked it' , 2, 2), ('learn to drum' , 2, 12),
('best song' , 3, 3), ('again! why, man?' , 3, 13),
('don''t make them like this anymore' , 4, 4), ('noice.' , 4, 14),
('yeah' , 5, 5), ('won''t you be original?' , 5, 15),
('yes' , 6, 6), ('tonight is the night' , 6, 1),
('definitely' , 7, 7), ('tomorrow never dies. neither does love. nor this song''s repetitive lines!' , 7, 2),
('thanks!' , 8, 8), ('another one!?' , 8, 3),
('almost as good as Best Song Ever' , 9, 9), ('creep' , 9, 4),
('Almost, but not quite' , 10, 10), ('did you know we can do this neat thing now: make music' , 10, 5);
