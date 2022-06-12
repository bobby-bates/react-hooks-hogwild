import Tile from "./Tile"

const TileList = ({ hogs, greasedFilter, nameSort, weightSort }) => {
  let filteredHogs
  // Filter, checking state of greased:
  filteredHogs = hogs.filter(hog => greasedFilter ? hog.greased : true)
  // Sort, checking states of nameSort and weightSort:
  if (nameSort) {
    filteredHogs.sort((a, b) => {
      const nameA = a.name.toUpperCase()
      const nameB = b.name.toUpperCase()
      return nameA < nameB ? -1 : 1
    })
  } else if (weightSort) {
    filteredHogs.sort((a, b) => {
      const weightA = a.weight
      const weightB = b.weight
      if (weightA < weightB) return -1
      else if (weightA > weightB) return 1
      else return 0
    })
  }

  const buildTiles = filteredHogs.map(({ name, image, ...details }) => (
    <Tile key={name} name={name} image={image} details={details}/>
    )
  )
  return <ul className='ui grid container'>{buildTiles}</ul>
}

export default TileList