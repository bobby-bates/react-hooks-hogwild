import { useState } from "react";
import Nav from "./Nav"
import HogFilter from "./HogFilter"
import HogSort from "./HogSort"
import TileList from "./TileList"

import hogArr from "../porkers_data";

function App() {
	// State: just hogs (tiles will be built dynamically for whatever amount of hogs)
	const [hogs, setHogs] = useState(hogArr)

	return (
		<div className="App">
			<Nav />
			<HogFilter />
			<HogSort />
			<TileList />
		</div>
	);
}

export default App;
