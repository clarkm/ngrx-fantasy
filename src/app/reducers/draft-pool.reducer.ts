
export function draftPoolReducer(masterListOfPlayers = [], action) {
    switch (action.type) {
        case '[Players API] Players Loaded Success':
          masterListOfPlayers = action.payload;
          return masterListOfPlayers
        case 'ADD_PLAYER_TO_TEAM':
            return masterListOfPlayers.filter(player => player !== action.payload.player)

        case 'ADD_PLAYER_TO_DRAFT_POOL':
            return [...masterListOfPlayers, action.payload.player]
       
        case 'REMOVE_PLAYER_FROM_DRAFT_POOL':
            return masterListOfPlayers.filter(player => player.name !== action.payload.player.name)
    
        default:
            return masterListOfPlayers
    }
    
}