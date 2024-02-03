import './Login.css';

function Login()
{
	return (
<table style={{margin:"auto"}}><tr><td>
	<div className="container" style={{width: "18em", marginTop: "1em", padding: "8px"}}>
		<div className="header">Please log in</div>
		<table style={{margin: "0 auto"}}>
		<tr>
		<td>E-mail: </td>
		<td><input type="text" id="email" autocomplete="on" /></td>
		</tr>
		<tr>
		<td>Password: </td>
		<td><input type="password" id="password" /></td>
		</tr>
		</table>
		<div className="error" style={{ display: "none"}}>E-mail or password is incorrect.</div>
		<div className="center">
			<button>Log in</button>
		</div>
	</div>

	<div className="container" style={{width: "18em", marginTop: "1em", padding: "8px"}}>
		<div className="header">Forgot your password?</div>
		<table style={{margin: "0 auto"}}>
		<tr>
		<td>E-mail: </td>
		<td><input type="text" id="reset" /></td>
		</tr>
		</table>
		<div className="center">
			<button>Request password reset</button>
		</div>
	</div>

	<div className="container" style={{width: "18em", marginTop: "1em", padding: "8px"}}>
		<div className="header">Not a BJM user?</div>
		<div className="center">
			<button>Register now!</button>
		</div>
	</div>
</td></tr></table>
	);
}

export default Login;
