USE bjm;

DROP TABLE IF EXISTS HireTypes;
CREATE TABLE HireTypes (
	ID INT NOT NULL,
	DisplayText NVARCHAR(100),
	PRIMARY KEY (ID)
);

INSERT INTO UserTypes(ID, DisplayText)
VALUES (1, 'Direct hire')
, (2, 'Contract-to-hire (W2)')
, (3, 'Contract-to-hire (1099)')
, (4, 'Contract (W2)')
, (5, 'Contract (1099)')
;
