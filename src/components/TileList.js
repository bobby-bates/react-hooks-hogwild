import Tile from "./Tile"

const TileList = ({ hogs }) => {
  // debugger
  const buildTiles = hogs.map(hog => {
      return <Tile
        key={hog.name}
        hog={hog} 
      />
    }
  )

  console.log('Hi from TileList')
  return (
    <>
      <ul className='ui grid container'>
        {buildTiles}
      </ul>
    </>
  )
}

export default TileList