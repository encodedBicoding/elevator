const initialState = {
  name: ''
}

const buttonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ELEVATE':
      return {
        ...state,
      }
    default:
      return state;
  }
}

export default buttonReducer;