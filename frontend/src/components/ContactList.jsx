import ContactCard from "./ContactCard";

export default function ContactList({ contacts = [] }) {
  if (contacts.length === 0) {
    return (
      <p className="text-gray-500 text-center mt-4">
        No contacts yet. Add one to get started!
      </p>
    );
  }

  return (
    <div className="grid gap-4">
      {contacts.map((contact) => (
        <ContactCard key={contact._id} contact={contact} />
      ))}
    </div>
  );
}
