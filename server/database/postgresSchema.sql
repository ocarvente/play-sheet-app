DROP DATABASE IF EXISTS football;

CREATE DATABASE football;

\c football;

CREATE TABLE plays (
  play_id SERIAL PRIMARY KEY,
  play_name VARCHAR(200) NOT NULL,
  play_url_photo TEXT NOT NULL,
  play_description TEXT NOT NULL
);

CREATE TABLE categories (
  category_id SERIAL PRIMARY KEY,
  category_name VARCHAR(200) NOT NULL
);

CREATE TABLE categorizedPlays (
  id SERIAL PRIMARY KEY,
  play_id INTEGER references plays(play_id) ON DELETE CASCADE,
  category_id INTEGER references categories(category_id) ON DELETE CASCADE
);

CREATE INDEX idx_play_id ON categorizedPlays (play_id);
CREATE INDEX idx_category_id ON categorizedPlays (category_id);

COPY plays (play_id, play_name, play_url_photo, play_description)
FROM '/Users/oscarcarvente/Desktop/plays.csv'
DELIMITER ',' CSV HEADER;


