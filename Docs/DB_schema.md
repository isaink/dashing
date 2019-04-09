# Schema

## services
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
service_name         | string    | not null
price                | float     | not null
duration             | string    | not null


## providers
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
name                 | string    | not null,
email                | string    | not null, indexed, unique
password             | string    | not null, indexed,
phone_number         | string    | not null, indexed,
location             | float     | not null,
service_id           | integer   | not null, foreign key,
port_img_1           | string    | not null,
port_img_2           | string    | not null,
port_img_3           | string    | not null,


## clients
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
first_name           | string    | not null,
last_name            | string    | not null,
email                | string    | not null, indexed, unique
password             | string    | not null, indexed,
phone_number         | string    | not null, indexed,
lat                  | float     | not null,
long                 | float     | not null
address              | varchar   | not null 