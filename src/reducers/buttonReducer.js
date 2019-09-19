const initialState = {
  name: ''
}

const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ELEVATE':
      return {
        ...state,
        name: action.name,
      }
    default:
      return state;
  }
}

export default buttonReducer;
