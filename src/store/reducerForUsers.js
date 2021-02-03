
const initialState = {
  name: 'fredo',
  users: [
    { id: 'A', name : 'Alain', age : 10 },
    { id: 'B', name : 'Roger', age : 20 },
    { id: 'C', name : 'Jean', age : 30 }
  ]
}

const reducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
      case 'CHANGE_NAME':
        return {
          ...state,
          name: action.value
        }
        break;
      case 'AGE_DOWN':
        const _users = state.users.map((user) => {
          const tmpUser = user
          tmpUser.age -= action.value
          return tmpUser
        })
        return {
          ...state,
          users: _users
        }
        break;
        default:
        break;
    }

    return newState
}

export default reducer
