DROP TABLE IF EXISTS players CASCADE;
DROP TABLE IF EXISTS teams CASCADE;
DROP TABLE IF EXISTS faqs CASCADE;
DROP TABLE IF EXISTS terms CASCADE;


CREATE TABLE players(
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	age INTEGER,
	salary INTEGER,
	college VARCHAR(255),
	team VARCHAR(255),
	position VARCHAR(255),
	instagram BOOLEAN,
	instagram_name VARCHAR(255),
	marital_status BOOLEAN
);

CREATE TABLE teams(
	id SERIAL PRIMARY KEY,
	team_name VARCHAR(255),
	hometown VARCHAR(255),
	stadium VARCHAR(255),
	head_coach VARCHAR(255),
	divison VARCHAR(255),
	mascot VARCHAR(255),
	homepage VARCHAR(255)
);

CREATE TABLE faqs (
	id SERIAL PRIMARY KEY,
	question TEXT,
	answer TEXT
);

CREATE TABLE terms(
	id SERIAL PRIMARY KEY,
	term VARCHAR(255),
	definition TEXT
);



