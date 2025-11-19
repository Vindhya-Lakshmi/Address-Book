import { useState } from "react";
import axios from "axios";

function ContactForm({ setContacts }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API}/api/contacts`,
        { name, phone }
      );

      // Add new contact to UI
      setContacts((prev) => [...prev, response.data]);

      setName("");
      setPhone("");
    } catch (error) {
      console.error("Error adding contact:", error);
    }
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
        Add
      </button>
    </form>
  );
}

export default ContactForm;
