import { useState } from "react";
import Nav from "./Nav"
import HogFilter from "./HogFilter"
import HogSort from "./HogSort"
import TileList from "./TileList"

import hogArr from "../porkers_data";

function App() {
	// (tiles will be built dynamically for whatever amount of hogs)
	const [hogs, setHogs] = useState(hogArr)
	const [greasedFilter, setGreasedFilter] = useState(false)
	const [nameSort, setNameSort] = useState(false)
	const [weightSort, setWeightSort] = useState(false)

	return (
		<div className="App">
			<Nav />
			<HogFilter />
			<HogSort />
			<TileList hogs={hogs} />
		</div>
	);
}

export default App;
