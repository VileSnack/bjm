USE bjm;

DROP TABLE IF EXISTS NamingStyles;
CREATE TABLE NamingStyles (
	ID INT NOT NULL,
	DisplayText NVARCHAR(100),
	PRIMARY KEY (ID)
);

INSERT INTO NamingStyles (ID, DisplayText) VALUES
	(1, 'Given name, middle name(s), family name')
	, (2, 'Family name, given name, middle name(s)')
	, (3, 'Given name, middle name(s), patronym');

