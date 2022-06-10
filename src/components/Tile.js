const Tile = ({ hog: {
  name,
  specialty,
  greased,
  weight,
  'highest medal achieved' : highestMedalAchieved,
  image
} }) => {
  console.log('Hi from Tile')
  // debugger
  return (
    <div className='ui eight wide column'>
      <li className='pigTile'>
        <h3 className='hoggyText'>{name}</h3>
        <img src={image} />
      </li>
    </div>
  )
}

export default Tile