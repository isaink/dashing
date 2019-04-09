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


## providers/services joined table            (done in queries instead?)
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
provider_id     | integer   | not null, foreign key
service_id      | integer   | not null, foreign key    


## providers/clients joined table             (for bookings)
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
event_name      | string    | not null
provider_id     | integer   | not null, foreign key
client_id       | integer   | not null, foreign key    
