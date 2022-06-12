const HogSort = ({ handleSelectedChange }) => (
  <div className='filterWrapper'>
    <label htmlFor='sortSelect'>Sort:</label>
    <select name='sortSelect' onChange={handleSelectedChange}>
      <option value='None'>Choose a category</option>
      <option value='Name'>Name</option>
      <option value='Weight'>Weight</option>
    </select>
  </div>
)

export default HogSort