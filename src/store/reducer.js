
const initialState = {
  name: 'fredo',
  users: [
    { id: 'A', name : 'Alain', age : 10 },
    { id: 'B', name : 'Roger', age : 20 },
    { id: 'C', name : 'Jean', age : 30 }
  ]
}

const reducer = (state = initialState, action) => {
    const newState = {...state}

    if(action.type === 'CHANGE_NAME'){
      return {
        ...state,
        name: action.value
      }
    }

    if(action.type === 'AGE_DOWN'){
      const _users = state.users.map((user) => {
        const tmpUser = user
        tmpUser.age -= action.value
        return tmpUser
      })
      return {
      ...state,
      users: _users
      }
    }

    return newState
}

export default reducer
