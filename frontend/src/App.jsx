import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import axios from "axios";

function App() {
  const [contacts, setContacts] = useState([]);

  // EDITING STATE
  const [editingContact, setEditingContact] = useState(null);

  // Load contacts
  useEffect(() => {
    const fetchContacts = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API}/api/contacts`);
      setContacts(res.data);
    };
    fetchContacts();
  }, []);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">📘 Address Book</h1>

      <ContactForm
        contacts={contacts}
        setContacts={setContacts}
        editingContact={editingContact}
        setEditingContact={setEditingContact}
      />

      <ContactList
        contacts={contacts}
        setContacts={setContacts}
        setEditingContact={setEditingContact}
      />
    </div>
  );
}

export default App;
