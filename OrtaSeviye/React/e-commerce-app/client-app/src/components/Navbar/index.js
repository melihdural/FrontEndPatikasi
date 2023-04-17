import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import styles from "./style.module.css"
import {Button} from "@chakra-ui/react";
import {useAuth} from "../../context/AuthContext";

function Navbar() {
    const loggedIn = useAuth(false);

    console.log(loggedIn)

    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className={"logo"}>
                    <Link to={"/"}>e-Commerce</Link>
                </div>

                <ul className={styles.menu}>
                    <li>
                        <Link to={"/"}>Products</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/users"}>Users </Link>
                    </li>
                </ul>
            </div>

            <div className={styles.right}>
                <Link to={"./signin"}>
                    <Button colorScheme={"pink"}>Login</Button>
                </Link>
                <Link to={"./signup"}>
                    <Button colorScheme={"pink"}>Register</Button>
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;