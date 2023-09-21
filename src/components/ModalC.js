import React from 'react';

const ModalC = ({ contact, closeModal }) => {
    return (
        <div className="modal-c">
            <h2>Contact Details</h2>
            <div>
                <strong>Name:</strong> {contact.first_name} {contact.last_name}
            </div>
            <div>
                <strong>Email:</strong> {contact.email || "N/A"}
            </div>
            <div>
                <strong>Phone:</strong> {contact.phone_number}
            </div>
            <div>
                <strong>Country ID:</strong> {contact.country_id}
            </div>
            <button style={{ backgroundColor: 'white', border: '2px solid #46139f' }} onClick={() => closeModal()}>Close</button>
        </div>
    );
};

export default ModalC;
