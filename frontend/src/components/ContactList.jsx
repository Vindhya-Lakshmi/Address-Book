import axios from "axios";

function ContactList({ contacts, setContacts, setEditingContact }) {
  
  const deleteContact = async (id) => {
    await axios.delete(`${import.meta.env.VITE_API}/api/contacts/${id}`);
    setContacts((prev) => prev.filter((c) => c._id !== id));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
      {contacts.map((c) => (
        <div key={c._id} className="p-4 bg-white shadow rounded-lg flex justify-between">
          <div>
            <h3 className="font-bold">{c.name}</h3>
            <p className="text-gray-600">{c.phone}</p>
          </div>

          <div className="flex flex-col gap-2">

            <button
              onClick={() => setEditingContact(c)}
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
        </div>
      ))}
    </div>
  );
}

export default ContactList;
