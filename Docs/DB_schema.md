# Schema

## services
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
service_name         | string    | not null
price                | integer   | not null
duration             | integer   | not null


## providers
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
first_name           | string    | not null,
last_name            | string    | not null,
email                | string    | not null, indexed, unique
password             | string    | not null, indexed,
phone_number         | string    | not null, indexed,
location             | integer   | not null,
service_id           | integer   | not null, foreign key,


## clients
column name          | data type | details
---------------------|-----------|-----------------------
id                   | integer   | not null, primary key
first_name           | string    | not null,
last_name            | string    | not null,
email                | string    | not null, indexed, unique
password             | string    | not null, indexed,
phone_number         | string    | not null, indexed,
location             | integer   | not null,