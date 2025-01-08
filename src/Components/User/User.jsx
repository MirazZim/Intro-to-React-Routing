import { useLoaderData } from "react-router-dom";

const User = () => {
const users = useLoaderData();
console.log(users)

    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <h3>This is for the Users</h3>
        </div>
    );
};

export default User;