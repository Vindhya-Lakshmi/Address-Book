import { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import axios from "axios";

function App() {
  const [contacts, setContacts] = useState([]);
  const [editData, setEditData] = useState(null); // For editing contact

  // 🗑 DELETE CONTACT
  const deleteContact = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API}/api/contacts/${id}`);
      setContacts((prev) => prev.filter((c) => c._id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  // ✏️ EDIT CONTACT (opens form with values)
  const startEditing = (contact) => {
    setEditData(contact); // pass this to the form
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">📘 Address Book</h1>

      {/* Contact Form (Add + Edit) */}
      <ContactForm
        setContacts={setContacts}
        editData={editData}
        setEditData={setEditData}
      />

      {/* Contact List (Search + Delete + Edit) */}
      <ContactList
        contacts={contacts}
        setContacts={setContacts}
        deleteContact={deleteContact}
        editContact={startEditing}
      />
    </div>
  );
}

export default App;
