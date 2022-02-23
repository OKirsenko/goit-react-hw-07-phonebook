import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import Form from './Form/Form';

// let a = 5;
export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
}
