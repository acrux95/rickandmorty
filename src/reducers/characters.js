import {
  CREATE_CHARACTERS,
  RETRIEVE_CHARACTERS,
  UPDATE_CHARACTERS,
  DELETE_CHARACTERS,
  DELETE_ALL_CHARACTERS,
} from "../actions/type";

const initialState = [];


const reducer = (characters = initialState, action) => {
  // const exist = state.myList.find(character => character.id === action.payload.id);
  switch (action.type) {
    case 'SET_FAVORITE':
      // if (exist) return { ...state };
      return {
        ...characters,
        myList: [...characters.myList, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...characters,
        myList: characters.myList.filter(character => character.id !== action.payload),
      };
    case CREATE_CHARACTERS:
      return [...characters, action.payload];

    case RETRIEVE_CHARACTERS:
      return action.payload;

    case UPDATE_CHARACTERS:
      return characters.map((character) => {
        if (character.id === action.payload.id) {
          return {
            ...character,
            ...action.payload,
          };
        } else {
          return character;
        }
      });

    case DELETE_CHARACTERS:
      return characters.filter(({ id }) => id !== action.payload.id);

    case DELETE_ALL_CHARACTERS:
      return [];
    default:
      return characters;
  }
};

export default reducer;