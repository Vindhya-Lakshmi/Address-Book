import axios from "axios";

function ContactList({ contacts, setContacts, setEditingContact }) {
  
  const deleteContact = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API}/api/contacts/${id}`);
    setContacts((prev) => prev.filter((c) => c._id !== id));
  };

  return (
    <div className="grid grid-cols-1 gap-4 mt-5">
      {contacts.map((c) => (
        <div key={c._id} className="p-4 bg-gradient-to-r from-blue-200 to-purple-200 shadow-md rounded-xl flex justify-between items-center hover:shadow-xl transition-all">

          <div>
            <h3 className="font-bold text-purple-700">{c.name}</h3>
            <p className="text-gray-700">{c.phone}</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setEditingContact(c)}
              className="bg-green-500 text-white px-3 py-1 rounded shadow hover:bg-green-600 transition"
            >
              Edit
            </button>

            <button
              onClick={() => deleteContact(c._id)}
              className="bg-red-500 text-white px-3 py-1 rounded shadow hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>

        </div>
      ))}
    </div>
  );
}

export default ContactList;
