
const thePlayers = [
        {
          "team": "ARI",
          "bye": "9",
          "name": "DavidJohnson",
          "rank": "5",
          "pos": "RB2"
        },
        {
          "team": "MIN",
          "bye": "6",
          "name": "AdrianPeterson",
          "rank": "6",
          "pos": "RB3"
        },
        {
          "team": "DAL",
          "bye": "7",
          "name": "EzekielElliott",
          "rank": "7",
          "pos": "RB4"
        },
        {
          "team": "HOU",
          "bye": "9",
          "name": "DeAndreHopkins",
          "rank": "8",
          "pos": "WR4"
        },
        {
          "team": "CIN",
          "bye": "9",
          "name": "A.J.Green",
          "rank": "9",
          "pos": "WR5"
        },
        {
          "team": "NE",
          "bye": "9",
          "name": "RobGronkowski",
          "rank": "10",
          "pos": "TE1"
        }
]

export function draftPoolReducer(masterListOfPlayers = thePlayers, action) {
    switch (action.type) {
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