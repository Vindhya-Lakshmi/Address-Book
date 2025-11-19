import { useEffect, useState } from "react";
import axios from "axios";

function ContactList({ contacts, setContacts }) {
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPhone, setEditPhone] = useState("");

  // Fetch contacts initially
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API}/api/contacts`);
        setContacts(res.data);
      } catch (err) {
        console.error("Error fetching contacts:", err);
      }
    };

    fetchContacts();
  }, []);

  // Delete Contact
  const deleteContact = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API}/api/contacts/${id}`);
      setContacts((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      console.error("Error deleting contact:", err);
    }
  };

  // Start Editing
  const startEdit = (contact) => {
    setEditId(contact._id);
    setEditName(contact.name);
    setEditPhone(contact.phone);
  };

  // Save Edited Contact
  const saveEdit = async () => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API}/api/contacts/${editId}`,
        { name: editName, phone: editPhone }
      );

      // Update UI
      setContacts((prev) =>
        prev.map((c) => (c._id === editId ? res.data : c))
      );

      setEditId(null); // exit edit mode
    } catch (err) {
      console.error("Error updating contact:", err);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
      {contacts.map((c) => (
        <div key={c._id} className="p-4 bg-white rounded-lg shadow flex justify-between">
          {editId === c._id ? (
            // EDIT MODE
            <div className="w-full">
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="border p-1 w-full mb-2 rounded"
              />

              <input
                type="text"
                value={editPhone}
                onChange={(e) => setEditPhone(e.target.value)}
                className="border p-1 w-full mb-2 rounded"
              />

              <div className="flex gap-2">
                <button
                  onClick={saveEdit}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Save
                </button>

                <button
                  onClick={() => setEditId(null)}
                  className="bg-gray-500 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            // NORMAL VIEW
            <>
              <div>
                <h3 className="font-bold text-lg">{c.name}</h3>
                <p className="text-gray-600">{c.phone}</p>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={() => startEdit(c)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteContact(c._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ContactList;
