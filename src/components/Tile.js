import { useState } from 'react'

const Tile = ({
  name,
  image,
  details: {
    specialty,
    weight,
    greased,
    'highest medal achieved': highestMedalAchieved
  }
}) => {
  const [showDetails, setShowDetails] = useState(false)

  const handleToggleData = () => setShowDetails(showDetails => !showDetails)

  const buildDetails = () => (
    <>
      <p>Specialty: {specialty}</p>
      <p>Weight: {weight}</p>
      <p>Greased: {greased ? 'Yup' : 'Nope'}</p>
      <p>Highest medal achieved: 
        <span className='achievementText'>
          {highestMedalAchieved}
        </span>
      </p>
    </>
  )

  const renderDetails = showDetails ? buildDetails() : null

  return (
    <div className='ui eight wide column'>
      <li className='pigTile normalText hoggyText' onClick={handleToggleData}>
        <h3 className='hoggyText'>{name}</h3>
        <img src={image} alt={name} />
        {renderDetails}
      </li>
    </div>
  )
}

export default Tile