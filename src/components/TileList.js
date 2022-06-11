// import { useState } from 'react'
import Tile from "./Tile"

const TileList = ({ hogs, greasedFilter }) => {
  // Pulling greased key from each hog and seeing if it's true:
  // const hogsToDisplay = hogs.filter(({ greased }) => greased )
  const hogsToDisplay = hogs.filter(hog => {
    return greasedFilter ? hog.greased : true
  })
  // debugger

  const buildTiles = hogsToDisplay.map(({ name, image, ...details }) => (
    <Tile key={name} name={name} image={image} details={details}/>
    )
  )
  
  return <ul className='ui grid container'>{buildTiles}</ul>
  }
  
  export default TileList
  
  // const sendDetails = showDetails ? details(hog) : null

  // const details = ({
  //   specialty,
  //   weight,
  //   greased,
  //   'highest medal achieved': highestMedalAchieved
  // }) => {
  //   debugger
  //   return {
  //   'specialty': specialty,
  //   'weight': weight,
  //   'greased': greased,
  //   'highestMedalAchieved': highestMedalAchieved
  //   }
  // }