import React, { useState } from 'react';

interface UserFormProps {
  onSubmit: (name: string, email: string) => void;
}

const AddUserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    console.log(e);
    e.preventDefault();
    onSubmit(name, email);
    setName('');
    setEmail('');
  };

  return (
    <div style={{ maxWidth: '300px', margin: '0 auto' }}>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserForm;
