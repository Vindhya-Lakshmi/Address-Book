import { Phone, Trash2, User } from "lucide-react";

export default function ContactCard({ contact }) {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 border border-purple-200 shadow-xl rounded-2xl p-5 flex items-center justify-between hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <div className="flex items-center gap-3">
        <div className="bg-white text-purple-700 p-3 rounded-full shadow">
          <User size={22} />
        </div>
        <div>
          <p className="text-xl font-bold text-white drop-shadow-md">{contact.name}</p>
          <p className="text-white flex items-center gap-1 font-medium drop-shadow-sm">
            <Phone size={16} /> {contact.phone}
          </p>
        </div>
      </div>

      <button className="text-white bg-red-500 hover:bg-red-600 transition p-2 rounded-lg shadow">
        <Trash2 size={20} />
      </button>
    </div>
  );
}
