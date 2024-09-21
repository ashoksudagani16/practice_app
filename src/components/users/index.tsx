import React, { useState } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

interface User {
  name: string;
  email: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const handleAddUser = (name: string, email: string) => {
    console.log(name)
    setUsers([...users, { name, email }]);
  };

  return (
    <div>
      <UserForm onSubmit={handleAddUser} />
      <hr />
      <UserList users={users} />
    </div>
  );
};

export default App;
