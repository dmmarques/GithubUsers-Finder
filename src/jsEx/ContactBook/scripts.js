let contacts = [];

function addContact() {
    const name = document.getElementById('uName').value;
    const phone = document.getElementById('uPhone').value;

    const phoneContact = { id: contacts.length + 1, name, phone };
    contacts.push(phoneContact);
    displayContacts();
}

function deleteContact(id) {
    contacts = contacts.filter((item) => item.id !== id); //ES6
    alert('Contact Deleted Successfully');
    displayContacts();
}

function searchContacts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredContacts = contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(searchTerm) || contact.phone.includes(searchTerm);
    });
    displayContacts(filteredContacts);
}

function displayContacts(contactsToDisplay) {
    let data = '';
    const contactsToShow = contactsToDisplay || contacts;
    for (let contact of contactsToShow) {
        data += `<tr>
                    <td>${contact.id}</td>
                    <td>${contact.name}</td>
                    <td>${contact.phone}</td>
                    <td>
                        <button class='btn btn-danger' onclick='deleteContact(${contact.id})'>X</button>
                        <button class='btn btn-success' onclick='viewContact(${contact.id})'>Edit</button>
                    </td>
                </tr>`;
    }
    document.getElementById('contacts').innerHTML = data;
}
