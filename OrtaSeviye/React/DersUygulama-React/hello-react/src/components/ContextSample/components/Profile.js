import {useState} from "react";
import {useUser} from "../context/UserContext";

function Profile() {
    const {user, setUser} = useUser()
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setUser({ id: 1, username: "Melih", bio: "Lorem ipsum dolor"});
            setLoading(false);
        },1500);
    };

    function handleLogout() {
        setLoading(true);
        setTimeout(() => {
            setUser(null);
            setLoading(false);
        },1500);
    }

    return(
        <div>
            {!user && (<button onClick={handleLogin}>{loading ? "loading..." : "Login"}</button>)}
            <br />
            <code>{JSON.stringify(user)}</code>
            <br />
            {user && (<button onClick={handleLogout}>{loading ? "loading..." : "Logout"}</button>)}
        </div>
    );
}

export default Profile