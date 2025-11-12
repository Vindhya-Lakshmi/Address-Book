import { useState } from "react";
import axios from "axios";
import { UserPlus } from "lucide-react";

function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // ✅ define handleSubmit inside the component
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contacts`,
        { name, phone }
      );
      if (addContact) addContact(response.data);
      setName("");
      setPhone("");
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  // ✅ now the form can call it safely
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Full Name"
        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-all"
      >
        <UserPlus size={20} /> Add Contact
      </button>
    </form>
  );
}

export default ContactForm;
