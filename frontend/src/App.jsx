import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center p-6">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-bold text-blue-700 drop-shadow-sm mb-2">📘 Address Book</h1>
          <p className="text-gray-600 text-lg">
          </p>
        </header>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add New Contact</h2>
            <ContactForm />
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Contacts</h2>
            <ContactList />
          </div>
        </div>
      </div>
    </div>
  );
}
