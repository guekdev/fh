import {ADD_NOTE, DELETE_NOTE} from '../constants';

export const addNote = (title, text, date) => {
  const action = {
    type: ADD_NOTE,
    title,
    text,
    date
  }
  return action;
}

export const deleteNote = (id) => {
  const action = {
    type: DELETE_NOTE,
    id
  }
  return action;
}
