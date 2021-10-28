CREATE TABLE comment(
	id SERIAL primary key not null,
	comment text,
	created_at timestamp default CURRENT_TIMESTAMP
);