import { useEffect } from "react";
import { useState } from "react";
import { fetchUsers } from "../../api/api";

const Users = () => {
    const [users, setUsers] = useState([]);

    console.log("Log ::: users ===", users);

    useEffect(() => {
        fetchUsers().then(data => setUsers(data));
    }, []);

    return (
        <>Users</>
    );
};

export default Users;
