import {ADD_NOTE, DELETE_NOTE} from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const note = (action) => {
  let { title, text, date } = action;
  return {
    id: Math.random(),
    title,
    text,
    date
  }
}

const removeById = (state = [], id) => {
  const notes = state.filter(note => note.id !== id);
  return notes;
}

const notes = (state = [], action) => {
  let notes = null;
  state = read_cookie('notes');
  switch (action.type) {
    case ADD_NOTE:
      notes = [...state, note(action)];
      bake_cookie('notes', notes);
      return notes;
    case DELETE_NOTE:
      notes = removeById(state, action.id);
      bake_cookie('notes', notes);
      return notes;
    default:
      return state;
  }
}

export default notes;
