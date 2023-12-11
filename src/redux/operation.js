import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://656fde5c6529ec1c6238413f.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContacts', async (contact, thunkAPI) => {
  try {
    const response = await axios.post('/contacts', { name: contact.name, phone: contact.phone });
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const deleteContact = createAsyncThunk('contacts/deleteContacts', async (id, thunkAPI) => {
  try {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
