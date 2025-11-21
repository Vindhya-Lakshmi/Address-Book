import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API}/api/contacts`);
        setContacts(res.data);
      } catch (error) {
        console.log("Error fetching contacts:", error);
      }
    };
    fetchContacts();
  }, []);

  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/contacts"
        element={
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
        }
      />
    </Routes>
  );
}

export default App;
