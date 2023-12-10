import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => {
  console.log(state);
  return state.contacts.items;
};
export const selectIsLoading = state => {
  return state.contacts.isLoading;
};
export const selectError = state => {
  return state.contacts.error;
};

export const selectFilter = state => state.filter.value;

export const selecVisibletContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
);
