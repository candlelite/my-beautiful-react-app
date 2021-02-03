
const initialState = {
  newMember :"",
  ageNewMember: '',
  members: [
    {id: Math.floor(Math.random()*100000000000000), firstname: 'Thierry', age:'32'},
    {id: Math.floor(Math.random()*100000000000000), firstname: '', age:'40'},
    {id: Math.floor(Math.random()*100000000000000),  firstname: 'Milou', age:'25'}
  ]
}

const reducer = (state = initialState, action) => {
    const newState = { ...state }
    switch (action.type) {
      case 'DEL_EVENT':
        return {
          ...state,
          //pour garder le state immuable, il faut utiliser filter pour effacer un élément d'un' tableau
          members: newState.members.filter((el)=> el.id !== action.value )
        }
        break;
      case 'CHANGE_NEW_MEMBER_FIELD':
        return {
          ...state,
          newMember: action.value.target.value
        }
        break;
      case 'CHANGE_NEW_MEMBER_AGE_FIELD':
        return {
          ...state,
          ageNewMember: action.value.target.value
        }
        break;
      case 'ADD_NEW_MEMBER':
        return {
          ...state,
          //pour garder le state immuable, il faut utiliser concat pour ajouter un élément au tableau
          members: state.members.concat({ id: Math.floor(Math.random()*100000000000000), firstname: state.newMember, age: state.ageNewMember })
        }
        break;
        case 'CHANGE_EVENT':
          const index = state.members.findIndex((member) => {
            return member.id === action.value.id
          })
          const member = Object.assign({}, state.members[index])
          member.firstname = action.value.e.target.value
          const members = Object.assign([], state.members)
          members[index]=member
          return {
            ...state,
            members: members
          }
        break;
        default:
        break;
    }

    return newState
}

export default reducer
