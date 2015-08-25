DROP TABLE IF EXISTS players CASCADE;
DROP TABLE IF EXISTS teams CASCADE;
DROP TABLE IF EXISTS faqs CASCADE;
DROP TABLE IF EXISTS terms CASCADE;


CREATE TABLE players(
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	age INTEGER,
	salary VARCHAR(255),
	college VARCHAR(255),
	team VARCHAR(255),
	position VARCHAR(255),
	instagram_name VARCHAR(255),
	marital_status BOOLEAN,
	jersey_number INTEGER,
	img_url VARCHAR(255),
	sport VARCHAR(255),
	upvote INTEGER
);

CREATE TABLE teams(
	id SERIAL PRIMARY KEY,
	team_name VARCHAR(255),
	hometown VARCHAR(255),
	stadium VARCHAR(255),
	head_coach VARCHAR(255),
	divison VARCHAR(255),
	mascot VARCHAR(255),
	homepage VARCHAR(255),
	sport VARCHAR(255)
);

CREATE TABLE faqs(
	id SERIAL PRIMARY KEY,
	question TEXT,
	answer TEXT,
	sport VARCHAR(255)
);

CREATE TABLE terms(
	id SERIAL PRIMARY KEY,
	term VARCHAR(255),
	definition TEXT,
	sport VARCHAR(255)
);




