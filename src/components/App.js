import { useState } from "react";
import Nav from "./Nav"
import HogFilter from "./HogFilter"
import HogSort from "./HogSort"
import TileList from "./TileList"

import hogsArr from "../porkers_data";

function App() {
	// const [hogs, setHogs] = useState(hogArr)
	const [greasedFilter, setGreasedFilter] = useState(false)
	// TODO: Merge all sort states
	const [nameSort, setNameSort] = useState(false)
	const [weightSort, setWeightSort] = useState(false)

	const handleFilterClick = () => setGreasedFilter(greasedFilter => !greasedFilter)

	const handleSelectedChange = e => {
		switch (e.target.value) {
			case 'None': {
				// Resets all sort state
				setNameSort(()=>false)
				setWeightSort(()=>false)
				break;
			}
			case 'Name': {
				setNameSort(()=>true)
				setWeightSort(()=>false)
				break;
			}
			case 'Weight': {
				setNameSort(()=>false)
				setWeightSort(()=>true)
				break;
			}
			default:
				console.log('Sort state error!')
			}
		}

	return (
		<div className="App">
			<Nav />
			<HogFilter greasedFilter={greasedFilter} handleFilterClick={handleFilterClick}/>
			<HogSort handleSelectedChange={handleSelectedChange}/>
			<TileList
				hogs={hogsArr}
				greasedFilter={greasedFilter}
				nameSort={nameSort}
				weightSort={weightSort}
			/>
		</div>
	);
}

export default App;
