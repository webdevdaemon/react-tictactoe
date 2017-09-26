import React, {Component} from 'react'
import './App.css'
import Tile from './Components/Tile/index'
import ControlPanel from './Components/ControlPanel/index'
import {_updateTally} from './_helpers/_updateTally'
import {_gameEval} from './_helpers/_gameEval'

const INITIAL_STATE = {
	current_player: '1',
	game: [null, null, null, null, null, null, null, null, null],
	highlight: [null, null, true, null, true, null, null, true, null],
	moves: 0,
	player_tally: [[], []],
	controls: {
		chosen_mark: '1',
		draw: false,
		scoreboard: [0, 0],
		winning_line: [],
		winner: false,
	},
}

class App extends Component {
	state = INITIAL_STATE

	_initGame = () => {
		this.setState(INITIAL_STATE)
	}

	_makeMark = e => {
		let {game, player_tally, moves, controls, current_player: actor} = this.state,
			n_game = game.slice(),
			tile = e.target.id
		n_game[tile] = actor

		if (game[e.target.id] !== null) {
			return
		} else if (moves > 9) {
			return
		}

		this.setState(
			previous_state => ({
				player_tally: _updateTally({actor, tile, player_tally}),
				moves: previous_state.moves + 1,
				game: n_game,
				current_player: `${1 - previous_state.current_player}`,
			}),
			() => {
				if (moves >= 4 && 9 > moves) {
					// IF - moves is between 4-8

					let game_obj = Object.assign({}, {actor}, {player_tally}),
						win = _gameEval(game_obj)

					if (Array.isArray(win)) {
						// IF - win is an array, it contains the winning tiles

						this.setState(prevState => {
							let scoreboard = prevState.controls.scoreboard
							scoreboard[actor] = scoreboard[actor] + 1
							return {controls: {scoreboard, winner: true, winning_line: win}}
						})
					}
				} else if (moves === 9 && !controls.winner) {
					//

					this.setState({controls: {draw: true}})
				}
				return
			},
		)
	}

	render() {
		return (
			<div className="main">
				<div className="game-wrapper">
					<div className="game">
						<ControlPanel controls={this.state.controls} newGame={this._initGame} />
						<div className="game">
							<div className="flex row row-1">
								<Tile
									highlight={this.state.highlight}
									player={this.state.current_player}
									markHandler={this._makeMark}
									tileID="0"
									tileValue={this.state.game[0]}
								/>
								<Tile
									highlight={this.state.highlight}
									player={this.state.current_player}
									markHandler={this._makeMark}
									tileID="1"
									tileValue={this.state.game[1]}
								/>
								<Tile
									highlight={this.state.highlight}
									player={this.state.current_player}
									markHandler={this._makeMark}
									tileID="2"
									tileValue={this.state.game[2]}
								/>
							</div>
							<div className="flex row row-2">
								<Tile
									highlight={this.state.highlight}
									player={this.state.current_player}
									markHandler={this._makeMark}
									tileID="3"
									tileValue={this.state.game[3]}
								/>
								<Tile
									highlight={this.state.highlight}
									player={this.state.current_player}
									markHandler={this._makeMark}
									tileID="4"
									tileValue={this.state.game[4]}
								/>
								<Tile
									highlight={this.state.highlight}
									player={this.state.current_player}
									markHandler={this._makeMark}
									tileID="5"
									tileValue={this.state.game[5]}
								/>
							</div>
							<div className="flex row row-3">
								<Tile
									highlight={this.state.highlight}
									player={this.state.current_player}
									markHandler={this._makeMark}
									tileID="6"
									tileValue={this.state.game[6]}
								/>
								<Tile
									highlight={this.state.highlight}
									player={this.state.current_player}
									markHandler={this._makeMark}
									tileID="7"
									tileValue={this.state.game[7]}
								/>
								<Tile
									highlight={this.state.highlight}
									player={this.state.current_player}
									markHandler={this._makeMark}
									tileID="8"
									tileValue={this.state.game[8]}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App
