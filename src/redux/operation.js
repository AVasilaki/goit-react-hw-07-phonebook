import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://656fde5c6529ec1c6238413f.mockapi.io';

// export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
//   const responce = await axios.get('/contacts');
//   console.log(responce.data, 'rd');
//   return responce.data;
// });

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      // При успішному запиті повертаємо проміс із даними
      console.log(response.data, 'rd');
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// fetchContacts();
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
