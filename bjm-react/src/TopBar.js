import './TopBar.css';

function TopBar({ userID })
{
	return (
		<div class="bar">
<div class="center">
<span class="title">Better Job Match</span>
{(userID == -1) ? (
<span class="subtitle">Match jobs to skills.</span>
) : (
<span class="subtitle">
	<span>Home</span>
	&nbsp;&#9670;&nbsp;
	<span>Find jobs</span>
	&nbsp;&#9670;&nbsp;
	<span>Profile</span>
	&nbsp;&#9670;&nbsp;
	<span>Log out</span>
</span>
)}
</div>
</div>
	);
}

export default TopBar;
