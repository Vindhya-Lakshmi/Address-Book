import { useState, useEffect } from "react";
import axios from "axios";

function ContactForm({ setContacts, editingContact, setEditingContact }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // When edit button clicked → fill form
  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setPhone(editingContact.phone);
    }
  }, [editingContact]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingContact) {
      // UPDATE contact
      const res = await axios.put(
        `${import.meta.env.VITE_API}/api/contacts/${editingContact._id}`,
        { name, phone }
      );

      setContacts((prev) =>
        prev.map((c) => (c._id === editingContact._id ? res.data : c))
      );

      setEditingContact(null);
    } else {
      // ADD new contact
      const res = await axios.post(
        `${import.meta.env.VITE_API}/api/contacts`,
        { name, phone }
      );
      setContacts((prev) => [...prev, res.data]);
    }

    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        placeholder="Name"
        className="border p-2 rounded w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Phone"
        className="border p-2 rounded w-full"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        {editingContact ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default ContactForm;
