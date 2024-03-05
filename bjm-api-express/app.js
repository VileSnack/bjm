const PORT = process.env.PORT || 8000;

const express = require('express');
const mysql = require('mysql');

const conn = mysql.createConnection({
	host: 'localhost',
	user: 'bjm',
	password: 'asAS12!@',
	database: 'bjm',
	typeCast: function castField(field, useDefaultTypeCasting)
	{
		if ((field.type === "BIT") && (field.length === 1))
		{
			var bytes = field.buffer();
			return(bytes[0] === 1);
		}

		return(useDefaultTypeCasting());

	}
});

conn.connect(function(err) {
	if (err) {
		return console.error('error: ' + err.message);
	}

	console.log('Connected to the MySQL server.');
});

const app = express();

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.options("/*", function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

	if ('OPTIONS' === req.method) {
		//respond with 200
		res.sendStatus(200);
	}
	else
	{
		//move on
		next();
	}
});

app.get("/", (req, res) => {
	res.json({ message: "ok" });
});

//--------------------------------------------------------------------------------------------------
// REST API for employers
//
app.put('/employers', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');

	let sql = "INSERT INTO Employers (Name, IndustryID) VALUES (?, ?);";

	conn.query(sql, [
			req.body.employer.Name,
			req.body.employer.IndustryID
		], function (err, rows, fields) {
		if (err) throw err;

		res.json({ success: true, msg: 'Success' });
	});
});

app.get('/employers', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');

	let sql = "SELECT e.*, COUNT(p.ID) AS PositionCount FROM Employers AS e LEFT JOIN Positions AS p ON p.EmployerID = e.ID GROUP BY e.ID ORDER BY e.Name;";

	conn.query(sql, [], function (err, rows, fields) {
		if (err) throw err;

		res.json({ success: true, employers: rows });
	});
});

app.post('/employers/:id', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');

	let employerID = parseInt(req.params.id);

	let sql = "UPDATE Employers SET Name = ?, IndustryID = ?, Spiel = ? WHERE ID = ?;";

	conn.query(sql, [req.body.employer.Name, req.body.employer.IndustryID, req.body.employer.Spiel, employerID], function (err, rows, fields) {
		if (err) throw err;

		res.json({ success: true, msg: 'Success' });
	});
});

app.delete('/employers/:id', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');

	let employerID = parseInt(req.params.id);

	let sql = "DELETE FROM Employers WHERE ID = ?;";

	conn.query(sql, [employerID], function (err, rows, fields) {
		if (err) throw err;

		res.json({ success: true, msg: 'Success'  });
	});
});

//--------------------------------------------------------------------------------------------------
// REST API for Industries
//
app.put('/industries', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');

	let sql = "INSERT INTO Industries (Name) VALUES (?);";

	conn.query(sql, [
			req.body.industry.Name
		], function (err, rows, fields) {
		if (err) throw err;

		res.json({ success: true, msg: 'Success' });
	});
});

app.get('/industries', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');

	let sql = "SELECT i.*, COUNT(e.ID) AS EmployerCount FROM Industries AS i LEFT JOIN Employers AS e ON e.IndustryID = i.ID GROUP BY i.ID ORDER BY i.Name;";

	conn.query(sql, [], function (err, rows, fields) {
		if (err) throw err;

		res.json({ success: true, industries: rows });
	});
});

app.delete('/industries/:id', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');

	let industryID = parseInt(req.params.id);

	let sql = "DELETE FROM Industries WHERE ID = ?;";

	conn.query(sql, [industryID], function (err, rows, fields) {
		if (err) throw err;

		res.json({ success: true, msg: 'Success' });
	});
});

//--------------------------------------------------------------------------------------------------
// REST API for positions
//
app.put('/positions', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');

	let sql = "INSERT INTO Positions (Title, EmployerID) VALUES (?, ?);";

	conn.query(sql, [
			req.body.position.Title,
			req.body.position.EmployerID
		], function (err, rows, fields) {
		if (err) throw err;

		res.json({ success: true, msg: 'Success' });
	});
});

app.get('/positions', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');

	let sql = "SELECT * FROM Positions ORDER BY Title;";

	conn.query(sql, [], function (err, rows, fields) {
		if (err) throw err;

		res.json({ success: true, positions: rows });
	});
});

app.post('/positions/:id', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');

	let positionID = parseInt(req.params.id);

	let sql = "UPDATE Positions SET Title = ?, EmployerID = ? WHERE ID = ?;";

	conn.query(sql, [req.body.position.Title, req.body.position.EmployerID, positionID], function (err, rows, fields) {
		if (err) throw err;

		res.json({ success: true, msg: 'Success' });
	});
});

app.delete('/positions/:id', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');

	let positionID = parseInt(req.params.id);

	let sql = "DELETE FROM Positions WHERE ID = ?;";

	conn.query(sql, [positionID], function (err, rows, fields) {
		if (err) throw err;

		res.json({ success: true, msg: 'Success' });
	});
});

//--------------------------------------------------------------------------------------------------
// REST API for users
//
app.put('/users', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');

	let sql = "INSERT INTO Users (EmailAddress, FamilyName, GivenName, MiddleName, NamingStyleID, Summary, UserTypeID)"
		+ " VALUES (?, ?, ?, ?, ?, ?, ?)"
	;

	conn.query(sql, [
			req.body.userData.EmailAddress,
			req.body.userData.FamilyName,
			req.body.userData.GivenName,
			req.body.userData.MiddleName,
			req.body.userData.NamingStyleID,
			req.body.userData.Summary,
			req.body.userData.UserTypeID
		], function (err, rows, fields) {
		if (err) throw err;

		res.json({ success: true, msg: 'Success' });
	});
});

app.get('/users/:id', (req, res) => {
	let sql = "SELECT * FROM Users WHERE ID = ?;";

	let userID = parseInt(req.params.id);

	conn.query(sql, [userID], function (err, rows, fields) {
		if (err) throw err;

		res.header('Access-Control-Allow-Origin', '*');

		if (0 === rows.length)
		{
			res.json({ success: false, msg: 'Invalid user'});
		}
		else
		{
			res.json({ success: true, user: rows[0] });
		}
	});
});

app.post('/users/:id', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');

	let sql = "UPDATE Users SET"
		+ " EmailAddress = ?"
		+ ", FamilyName = ?"
		+ ", GivenName = ?"
		+ ", MiddleName = ?"
		+ ", NamingStyleID = ?"
		+ ", Summary = ?"
		+ " WHERE ID = ?;";

	conn.query(sql, [
			req.body.userData.EmailAddress,
			req.body.userData.FamilyName,
			req.body.userData.GivenName,
			req.body.userData.MiddleName,
			req.body.userData.NamingStyleID,
			req.body.userData.Summary,
			parseInt(req.params.id)
		], function (err, rows, fields) {
		if (err) throw err;

		res.json({ success: true, msg: 'Success' });
	});
});

//--------------------------------------------------------------------------------------------------
// REST API for work histories
//
app.put('/work-history', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');

	let sql = "CALL AddWorkHistory(?, ?, ?, ?, ?, ?);"
	;

	conn.query(sql, [
			parseInt(req.body.input.EmployeeID),
			req.body.input.EmployerName,
			req.body.input.PositionTitle,
			req.body.input.StartDate,
			req.body.input.EndDate,
			req.body.input.IsCurrent
		], function (err, rows, fields) {
		if (err) throw err;

		res.json({ success: true, msg: 'Success' });
	});
});

app.get('/work-history/:id', (req, res) => {
	let sql = "SELECT w.*, p.Title AS PositionTitle, e.Name AS EmployerName"
		+ " FROM WorkHistoryEntries AS w LEFT JOIN Positions AS p ON p.ID = w.PositionID LEFT JOIN Employers AS e ON e.ID = p.EmployerID"
		+ " WHERE w.UserID = ?"
		+ " ORDER BY w.StartDate DESC;";

	let userID = parseInt(req.params.id);

	conn.query(sql, [userID], function (err, rows, fields) {
		if (err) throw err;

		res.header('Access-Control-Allow-Origin', '*');

		res.json({ success: true, history: rows });
	});
});

//--------------------------------------------------------------------------------------------------
// REST API for login
//
app.post('/login', (req, res) => {
	let sql = "SELECT * FROM Users WHERE EmailAddress = ?;";

	conn.query(sql, [req.body.email], function (err, rows, fields) {
		if (err) throw err;

		res.header('Access-Control-Allow-Origin', '*');

		if (0 === rows.length)
		{
			res.json({ success: false, msg: 'Invalid user'});
		}
		else
		{
			res.json({ success: true, userData: rows[0] });
		}
	});
});

app.listen(PORT, () => {
	console.log("Server Listening on PORT:", PORT);
});
