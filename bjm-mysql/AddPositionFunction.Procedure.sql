use bjm;

DROP PROCEDURE IF EXISTS AddPositionFunction;

DELIMITER $$

CREATE PROCEDURE AddPositionFunction(
	IN PositionID INT,
	IN FunctionName NVARCHAR(100)
)
BEGIN
	DECLARE l_FunctionID INT;

	SET l_FunctionID = (SELECT ID FROM Functions WHERE Name = FunctionName);

	IF l_FunctionID IS NULL THEN
		INSERT INTO Functions(Name)
		SELECT FunctionName AS Name
		;

		SET l_FunctionID = last_insert_id();
	END IF;

	INSERT INTO PositionFunctions(PositionID, FunctionID)
	SELECT PositionID AS PositionID,
		l_FunctionID AS FunctionID
	;

END $$

DELIMITER ;
