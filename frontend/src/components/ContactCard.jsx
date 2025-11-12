import { Phone, Trash2, User } from "lucide-react";

export default function ContactCard({ contact }) {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-50 border border-blue-200 shadow-md rounded-xl p-4 flex items-center justify-between hover:shadow-lg transition-all">
      <div className="flex items-center gap-3">
        <div className="bg-blue-600 text-white p-3 rounded-full">
          <User size={20} />
        </div>
        <div>
          <p className="text-lg font-semibold text-gray-800">{contact.name}</p>
          <p className="text-gray-600 flex items-center gap-1">
            <Phone size={14} /> {contact.phone}
          </p>
        </div>
      </div>

      <button className="text-red-500 hover:text-red-700 transition">
        <Trash2 size={20} />
      </button>
    </div>
  );
}
