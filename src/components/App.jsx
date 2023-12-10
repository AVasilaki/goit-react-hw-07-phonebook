import { AddContact } from './AddContact/AddContact';
import Contacts from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { fetchContacts } from '../redux/operation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from '../redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <AddContact></AddContact>
      <Filter></Filter>
      {isLoading && !error && <b>loading in progress...</b>}
      <Contacts></Contacts>
    </>
  );
};
