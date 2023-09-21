export const selectAllContacts = (state) => state.contacts.contacts || [];
export const selectUSContacts = state => state.contactReducer.contacts.filter(contact => contact.country_id === 226);

