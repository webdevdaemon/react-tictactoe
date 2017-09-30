// import _ from 'lodash'

// const legend = [
// 	// TL-TR -
// 	['0', '1', '2'],
// 	// TL-BL |
// 	['0', '3', '6'],
// 	// TL-BR \
// 	['0', '4', '8'],
// 	// TM-BM |
// 	['1', '4', '7'],
// 	// TR-BL /
// 	['2', '4', '6'],
// 	// TR-BR |
// 	['2', '5', '8'],
// 	// ML-MR -
// 	['3', '4', '5'],
// 	// BL-BR -
// 	['6', '7', '8'],
// ]

export const _gameEval = ({ player_tally, actor }) => {
    let moves = player_tally[actor].length > 1
        ? player_tally[actor].sort()
        : player_tally[actor],
        is_winner = moves.reduce((acc, curr, dex, ray) => {
            if (dex < 1) { return acc }
            return acc.concat(curr - ray[dex - 1])
        }, [] ).filter( ( curr, dex, ray ) => {
            return ray[0] === curr 
        })

    console.log('_gameEval.js:29 ::', is_winner)
    return {is_winner, moves}
}

/*	console.log(moves)
legend.forEach(key => {
if (_.is_winnerersection(key, moves).length === 3) {
winner = key
}
return
})
return winner*/