import { ADD_FAVORITE, DELETE_FAVORITE,FILTER, ORDER } from "./actions-types"
const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) =>{
    
    switch(action.type){
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            }
        case DELETE_FAVORITE: 
            return{
                ...state,
                myFavorites: action.payload
            }
        case FILTER:
            const allCharsFiltered = state.allCharacters.filter(char => char.gender === action.payload);
            return{
                ...state,
                myFavorites: allCharsFiltered
            }
        case ORDER:
            return{
                ...state,
                myFavorites: action.payload === "Ascendente" ? state.allCharacters.sort((a,b) => a.id - b.id) : state.allCharacters.sort((a,b) => b.id - a.id)

                // if (action.payload === "Ascendente") {
                //     orderCharacter.sort((a, b) =>
                //       a.name.localeCompare(b.name) 'rick sanchez' = 'Morty Smith'
                //     );
                //   } else {
                //     orderCharacter.sort((a, b) =>
                //       b.name.localeCompare(a.name)
                //     );
                //   } 
            }

        default: return {...state}
    }
}

export default reducer;