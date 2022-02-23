import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { changeFilter } from './contacts-actions';
import { getContacts, deleteContact, addContact } from './contacts-operations';

const setError = (_, { payload }) => payload;

const items = createReducer([], {
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const isLoadingReducer = createReducer(false, {
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const errorReducer = createReducer(null, {
  [addContact.rejected]: setError,
  [addContact.pending]: null,
  [getContacts.rejected]: setError,
  [getContacts.pending]: null,
  [deleteContact.rejected]: setError,
  [deleteContact.pending]: null,
});

export default combineReducers({
  items,
  filter,
  isLoading: isLoadingReducer,
  error: errorReducer,
});
