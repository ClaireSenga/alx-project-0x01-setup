import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: { street: "", suite: "", city: "", zipcode: "", geo: { lat: "", lng: "" } },
    phone: "",
    website: "",
    company: { name: "", catchPhrase: "", bs: "" }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" value={user.name} onChange={handleChange} placeholder="Name" className="border p-2 w-full mb-4"/>
          <input name="username" value={user.username} onChange={handleChange} placeholder="Username" className="border p-2 w-full mb-4"/>
          <input name="email" value={user.email} onChange={handleChange} placeholder="Email" className="border p-2 w-full mb-4"/>
          <input name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" className="border p-2 w-full mb-4"/>
          <input name="website" value={user.website} onChange={handleChange} placeholder="Website" className="border p-2 w-full mb-4"/>
          <input name="company.name" value={user.company.name} onChange={handleChange} placeholder="Company" className="border p-2 w-full mb-4"/>
          <div className="flex justify-end space-x-4">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
