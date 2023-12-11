import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { deleteContact } from '../../redux/operation';
import { selecVisibletContacts } from '../../redux/selectors';

const Contacts = () => {
  // const contacts = useSelector(state => state.contacts);
  // console.log(selectFilter);
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(state => state.filter);
  // const filter = useSelector(selectFilter);
  // const filtredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  // );
  const filtredContacts = useSelector(selecVisibletContacts);
  const dispatch = useDispatch();

  const handleDeletContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <h2 className=' mb-4 text-3xl'>Contacts:</h2>
      <ul>
        {filtredContacts.map(({ id, name, phone }) => (
          <li key={id} className='mb-2 rounded-md border-2 p-4'>
            <p>
              {name}: {phone}
            </p>
            <button
              type='button'
              onClick={() => handleDeletContact(id)}
              className='mt-2 rounded-lg bg-blue-500 px-2 text-white hover:bg-rose-600 active:bg-rose-700'
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array,
  onRemoveContact: PropTypes.func,
};
export default Contacts;
