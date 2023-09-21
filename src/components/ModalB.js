// ModalB.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalC from "./ModalC";
import { fetchContacts } from "../actions/contactActions";
import { selectAllContacts } from "../selectors/contactSelectors";

const ModalB = ({ closeModal, openModalA }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts) || [];
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [onlyEven, setOnlyEven] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts({ countryId: 226, query: searchQuery }));
  }, [dispatch, searchQuery]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredContactsArray = Object.values(contacts);
  const filteredContacts = onlyEven
  ? filteredContactsArray.filter((contact) => contact?.id % 2 === 0)
  : filteredContactsArray.filter((contact) => {
      const fullName = `${contact.first_name} ${contact.last_name}`;
      // Case-insensitive search
      return fullName.toLowerCase().includes(searchQuery.toLowerCase());
    });

  return (
    <div className="modal-b">
      <button
        style={{ backgroundColor: "#ff7f50" }}
        onClick={() => dispatch(fetchContacts({ countryId: 226 }))}
      >
        Reload US Contacts
      </button>
      <button
        style={{ backgroundColor: "white", border: "2px solid #46139f" }}
        onClick={closeModal}
      >
        Close
      </button>
      <button
        style={{ backgroundColor: "#3498db" }}
        onClick={openModalA}
      >
        All Contacts
      </button>

      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="contacts-list">
        {filteredContacts &&
          filteredContacts.map((contact) => (
            <div key={contact.id} onClick={() => setSelectedContact(contact)}>
              {contact.first_name} {contact.last_name}
            </div>
          ))}
      </div>
      <div className="footer">
        <label>
          <input
            type="checkbox"
            checked={onlyEven}
            onChange={() => setOnlyEven(!onlyEven)}
          />
          Only even
        </label>
      </div>
      {selectedContact && (
        <ModalC
          contact={selectedContact}
          closeModal={() => setSelectedContact(null)}
        />
      )}
    </div>
  );
};

export default ModalB;
