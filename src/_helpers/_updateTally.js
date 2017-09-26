export const _updateTally = ({actor, tile, player_tally}) => {
	let update = player_tally.slice()
	update[actor] = [...update[actor], tile].sort()
	return update
}
