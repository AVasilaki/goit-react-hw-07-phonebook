import { AddContact } from './AddContact/AddContact';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <>
      <AddContact></AddContact>
      <Filter></Filter>
      <Contacts></Contacts>
    </>
  );
};
