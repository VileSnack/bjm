const PORT = process.env.PORT || 8000;

const express = require('express');
const mysql = require('mysql');

const conn = mysql.createConnection({
	host: 'localhost',
	user: 'bjm',
	password: 'asAS12!@',
	database: 'bjm'
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

app.post('/getUser', (req, res) => {
	let sql = "SELECT * FROM Users WHERE ID = ?;";

	conn.query(sql, [req.body.userID], function (err, rows, fields) {
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

app.post('/updateUser', (req, res) => {
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
			req.body.userData.ID
		], function (err, rows, fields) {
		if (err) throw err;

		res.json({ success: true, msg: 'Success' });
	});
});

app.post('/addUser', (req, res) => {
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

app.post('/addIndustry', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');

	let sql = "INSERT INTO Industries (Name) VALUES (?);";

	conn.query(sql, [
			req.body.industry.Name
		], function (err, rows, fields) {
		if (err) throw err;

		res.json({ success: true, msg: 'Success' });
	});
});

app.post('/removeIndustry', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');

	let sql = "DELETE FROM Industries WHERE ID = ?;";

	conn.query(sql, [
			req.body.industryID
		], function (err, rows, fields) {
		if (err) throw err;

		res.json({ success: true, msg: 'Success' });
	});
});

app.get('/industries', (req, res) => {
	res.header('Access-Control-Allow-Origin', '*');

	let sql = "SELECT * FROM Industries ORDER BY Name;";

	conn.query(sql, [], function (err, rows, fields) {
		if (err) throw err;

		res.json({ success: true, industries: rows });
	});
});

app.listen(PORT, () => {
	console.log("Server Listening on PORT:", PORT);
});
