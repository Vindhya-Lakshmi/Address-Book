import { useState, useEffect } from "react";
import axios from "axios";

function ContactForm({ setContacts, editingContact, setEditingContact }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setPhone(editingContact.phone);
    }
  }, [editingContact]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingContact) {
      const res = await axios.put(
        `${import.meta.env.VITE_API}/api/contacts/${editingContact._id}`,
        { name, phone }
      );
      setContacts((prev) =>
        prev.map((c) => (c._id === editingContact._id ? res.data : c))
      );
      setEditingContact(null);
    } else {
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
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 mb-6 bg-white/50 p-4 rounded-xl shadow-lg backdrop-blur-md"
    >
      <input
        type="text"
        placeholder="Name"
        className="border p-3 rounded w-full focus:ring-2 focus:ring-purple-400"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Phone"
        className="border p-3 rounded w-full focus:ring-2 focus:ring-pink-400"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button className="px-5 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition">
        {editingContact ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default ContactForm;
