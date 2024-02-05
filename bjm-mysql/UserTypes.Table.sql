USE bjm;

DROP TABLE IF EXISTS UserTypes;
CREATE TABLE UserTypes (
	ID INT NOT NULL,
	DisplayText NVARCHAR(100),
	PRIMARY KEY (ID)
);

INSERT INTO UserTypes(ID, DisplayText)
VALUES (1, 'Administrator'), (2, 'Job seeker'), (3, 'Recruiter')
;
