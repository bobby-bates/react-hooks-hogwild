import piggy from "../assets/porco.png";

const Nav = () => (
	<div className="navWrapper">
		<h1 className="headerText">HogWild</h1>
		<div className="TwirlyPig">
			<img src={piggy} className="App-logo" alt="piggy" />
		</div>
		<h2 className="normalText">
			A React App for County Fair Hog Fans
		</h2>
	</div>
);

export default Nav;
