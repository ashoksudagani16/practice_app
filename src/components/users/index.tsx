import React, {useState, useEffect} from 'react'

function Users() {
    const [users, setUsers] =useState<string[]>([]);
    const [error, setError] = useState<string | null>("")
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data.map((user: {name: string}) => user.name)))
      .catch(error=> setError(error))
    }, [])
    return (
        <div>
            <h1>Users</h1>
            {error && <p>Error</p>}
         <ul>
            {users.map((user) => <li>{user}</li>)}
         </ul>
        </div>
    )
}

export default Users
