import { cloneDeep } from 'lodash';

let moveInReverse = false;
export function teamsReducer(listOfTeams = [], action) {
  switch (action.type) {
    case 'ADD_PLAYER_TO_TEAM':
      const newListOfTeams = cloneDeep(listOfTeams);
      for (let i = 0; i < newListOfTeams.length; i++) {
        const e = newListOfTeams[i];
        if (e.selected) {
          e.players.push(action.payload.player);
          const teamIndex = newListOfTeams.findIndex(t => t.selected === true);
          newListOfTeams[teamIndex].selected = false;
          if (!moveInReverse) {
            if ((teamIndex + 1) % newListOfTeams.length === 0) {
              moveInReverse = true;
              newListOfTeams[teamIndex].selected = true;
            } else {
              newListOfTeams[teamIndex + 1].selected = true;
            }

          } else {
            if (teamIndex === 0) {
              moveInReverse = false;
              newListOfTeams[teamIndex].selected = true;
            } else {
              newListOfTeams[teamIndex - 1].selected = true;
            }
          }
          break
        }
      }

      return [...newListOfTeams];
    case 'REMOVE_PLAYER_FROM_TEAM':
      const newTeamsForRemoval = cloneDeep(listOfTeams);
      for (let i = 0; i < newTeamsForRemoval.length; i++) {
        const e = newTeamsForRemoval[i];
        if (e.selected) {
          const pIndex = e.players.findIndex(
            p => p.name === action.payload.player.name
          );
          if (pIndex > -1) {
            e.players.splice(pIndex, 1);
          }
        }
      }
      return [...newTeamsForRemoval];

    case '[TEAMS COMPONENT] SELECT_TEAM':
      // loop through and add the .selected property to the clicked on team, then return the list of teams
      const newTeamsForSelection = cloneDeep(listOfTeams);
      // set them all to false first, then the clicked on one to true
      for (let i = 0; i < newTeamsForSelection.length; i++) {
        const e = newTeamsForSelection[i];
        e.selected = false;
      }
      for (let i = 0; i < newTeamsForSelection.length; i++) {
        const e = newTeamsForSelection[i];
        if (e.name === action.payload.teamName) {
          e.selected = true;
        }
      }
      return [...newTeamsForSelection];

    case 'CREATE_TEAM':
      let selected = false;
      if (!listOfTeams.length) {
        selected = true;
      }
      return [
        ...listOfTeams,
        { name: action.payload.name, players: action.payload.players, selected: selected }
      ];

    case 'REMOVE_TEAM':
      return listOfTeams.filter(team => team.name !== action.payload.name);

    default:
      return listOfTeams;
  }
}
