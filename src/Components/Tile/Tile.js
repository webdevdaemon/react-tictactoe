import React from "react"
import './Tile.css'

const Tile = ({ tileValue, tileID, player, markHandler, highlight }) => (
  <div className='tile Tile'>
    <button onClick={markHandler} id={tileID} className={`${highlight[tileID] ? 'lit' : ''}`}>
			<p>
				{
					tileValue === '0' ? 'O'
					:
					tileValue === '1' ? 'X' : ''
				}
			</p>
		</button>
  </div>
)

export default Tile
