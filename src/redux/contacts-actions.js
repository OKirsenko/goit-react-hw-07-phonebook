import { createAction } from '@reduxjs/toolkit';

export const changeFilter = createAction('contacts/ changeFilter', event => {
  return {
    payload: event.target.value,
  };
});
