
export const changeName = (newName) => {
  return { type: 'CHANGE_NAME', value: newName };
};

export const delEvent = (index) => {
  return { type: 'DEL_EVENT', value: index };
};

export const changeNewMemberField = (e) => {
  return {type: 'CHANGE_NEW_MEMBER_FIELD', value: e};
};

export const changeNewMemberAgeField = (e) => {
  return {type: 'CHANGE_NEW_MEMBER_AGE_FIELD', value: e};
};

export const addNewMember = (newMember, ageNewMember) => {
  return {type: 'ADD_NEW_MEMBER', value:  { newMember, ageNewMember }};
};

export const changeEvent = (id, e) => {
  return {type: 'CHANGE_EVENT', value:  { id, e }};
};

export const makeMeYoungerAsync = (step) => {
  return {type:'AGE_DOWN', value:step};
};

//pattern to follow to do something asynchronous
export const makeMeYounger = (step) => {
  return dispatch => {
    dispatch(loading());
    setTimeout(() => {
      step--
      dispatch(makeMeYoungerAsync(step))
    }, 5000)
  }
};

export const loading = () => {
  return {type: "LOADING"};
};
