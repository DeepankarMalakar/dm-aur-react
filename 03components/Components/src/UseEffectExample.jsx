import { useEffect, useState } from "react";

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await reponse.json();
            setUsers(data);
        };
        fetchData();
    }, [])

    return (
        <>
            <ol>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ol>
        </>
    )
}

export default UserList;