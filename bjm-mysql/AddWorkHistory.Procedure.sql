use bjm;

DROP PROCEDURE IF EXISTS AddWorkHistory;

DELIMITER $$

CREATE PROCEDURE AddWorkHistory(
	IN EmployeeID INT,
	IN EmployerName NVARCHAR(100),
    IN PositionTitle NVARCHAR(100),
    IN StartDate DATE,
    IN EndDate DATE,
    IN IsCurrent BIT
)
BEGIN
	DECLARE l_EmployerID INT;
    DECLARE l_PositionID INT;

	SET l_EmployerID = (SELECT ID FROM Employers WHERE Name = EmployerName);

	IF l_EmployerID IS NULL THEN
		INSERT INTO Employers(Name, IndustryID, Spiel)
        SELECT EmployerName AS Name,
			-1 AS IndustryID,
            '' AS Spiel
		;
        
        SET l_EmployerID = last_insert_id();
    END IF;

	SET l_PositionID = (SELECT ID FROM Positions WHERE EmployerID = l_EmployerID AND Title = PositionTitle);

	IF l_PositionID IS NULL THEN
		INSERT INTO Positions(Title, EmployerID)
        SELECT PositionTitle AS Title,
			l_EmployerID AS EmployerID
		;
        
        SET l_PositionID = last_insert_id();
    END IF;

	INSERT INTO WorkHistoryEntries(UserID, PositionID, StartDate, EndDate, IsCurrent)
    SELECT EmployeeID AS UserID,
		l_PositionID AS PositionID,
        StartDate AS StartDate,
        EndDate AS EndDate,
        IsCurrent AS IsCurrent
	;

END $$

DELIMITER ;

