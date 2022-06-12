const HogFilter = ({greasedFilter, handleFilterClick }) => (
  <div className='filterWrapper'>
    <label htmlFor='greasedFilter'>Greased only:</label>
    <button name='greasedFilter' onClick={handleFilterClick}>
      {greasedFilter ? 'On' : 'Off'}
    </button>
  </div>
)

export default HogFilter