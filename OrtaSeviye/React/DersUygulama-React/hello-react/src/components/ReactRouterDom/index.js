import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, NavLink
} from "react-router-dom";
import Users from "./components/Users";
import User from "./components/User";
import ErrorPage from "./components/ErrorPage";

function ReactRouterDom() {
    return (
        /*Route - Link - Nesting*/
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink aria-activedescendant={"active"} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink aria-activedescendant={"active"} to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink aria-activedescendant={"active"} to="/users">Users</NavLink>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                    <Route path="/"
                           element={<Home/>}>
                    </Route>
                    <Route path="/about"
                           element={<About />}>
                    </Route>

                    <Route path="/users"
                           //İçerideki bir function gibi import ile dışarıdaki bir function'da çağırabiliriz.
                           element={<Users />}>
                        <Route path=':name/:id' element={<User />} />
                    </Route>
                    <Route path={"*"} element={<ErrorPage />} />
                </Routes>
            </div>
        </Router>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

export default ReactRouterDom