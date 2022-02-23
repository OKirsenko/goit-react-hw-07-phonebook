import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts-actions';
import s from './ContactList.module.css';

const filterContact = (items, filter) => {
  return items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export default function ContactsList() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const newItems = filterContact(items, filter);
  return (
    <ul className={s.list}>
      {newItems.map(({ name, id, number }) => (
        <li key={id} className={s.item}>
          {name} : {number}
          <button
            className={s.button}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
