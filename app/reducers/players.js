// Start the sequence of item ID's at 0
let nextPlayerId = 0;

const players = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PLAYER':
      return [
        ...state,
        {
          id: nextPlayerId++,
          name: action.name,
          point: 0,
        },
      ];
      break;
    default:
      return state;
  }
};

export default players;
