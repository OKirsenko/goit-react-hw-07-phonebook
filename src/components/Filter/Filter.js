import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contacts-actions';
import s from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  return (
    <label htmlFor="" className={s.label}>
      Find contact by name
      <br />
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={event => dispatch(changeFilter(event))}
      />
    </label>
  );
}
