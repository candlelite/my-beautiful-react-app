
const initialState = {
  name: 'fredo'
}

const reducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === 'CHANGE_NAME'){
      newState.name = action.val
    }

    return newState
}

export default reducer
