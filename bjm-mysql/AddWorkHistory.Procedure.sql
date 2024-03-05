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
	DECLARE @EmployerID INT;
    DECLARE @PositionID INT;

	SET @EmployerID = (SELECT ID FROM Employers WHERE Name = EmployerName);

	IF @EmployerID IS NULL THEN
    BEGIN
		INSERT INTO Employers(Name, IndustryID, Spiel)
        SELECT EmployerName AS Name,
			-1 AS IndustryID,
            '' AS Spiel
		;
        
        SET @EmployerID = last_insert_id();
    END

	SET @PositionID = (SELECT ID FROM Positions WHERE EmployerID = @EmployerID AND Title = PositionTitle);

	IF @PositionID IS NULL THEN
    BEGIN
		INSERT INTO Positions(Title, EmployerID)
        SELECT PositionTitle AS Title,
			@EmployerID AS EmployerID
		;
        
        SET @PositionID = last_insert_id();
    END

	INSERT INTO WorkHistoryEntries(UserID, PositionID, StartDate, EndDate, IsCurrent)
    SELECT EmployeeID AS UserID,
		@PositionID AS PositionID,
        StartDate AS StartDate,
        EndDate AS EndDate,
        IsCurrent AS IsCurrent
	;
END ;

DELIMITER ;
