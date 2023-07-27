DROP DATABASE IF EXISTS football;

CREATE DATABASE football;

\c football
DROP TABLE IF EXISTS plays;

CREATE TABLE plays (
  play_id SERIAL PRIMARY KEY,
  play_name VARCHAR(200) NOT NULL,
  play_url_photo TEXT NOT NULL,
  play_description TEXT NOT NULL
);


------COPY preset data -----

COPY plays (play_id, play_name, play_url_photo, play_description)
FROM '/Users/oscarcarvente/Desktop/plays.csv'
DELIMITER ',' CSV HEADER;


