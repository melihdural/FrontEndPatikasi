import {useEffect, useState} from "react";
import {Link, NavLink, Outlet} from "react-router-dom";
import axios from "axios";

function Users() {
const [users, setUsers] = useState([]);
const [isLoading, setIsLoading] = useState(true);


const slugText = (text) => {
    return text.toLowerCase().replace(/ /g, "-");
};



useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data))
        .finally(() => setIsLoading(false))
},[])

    return(
        <div>
            <h1>Users</h1>
            {isLoading && <div>Loading...</div>}
            <ul>
                {users.map((user) =>
                  <li key={user.id}>
                      <NavLink aria-activedescendant={"active"} to={`/users/${slugText(user.name)}/${user.id}`}>{user.name}</NavLink>
                  </li>
                )}
            </ul>

            <button onClick={() => window.history.back()}>Go Back</button>
            <Outlet />
        </div>
    );
}


export default Users