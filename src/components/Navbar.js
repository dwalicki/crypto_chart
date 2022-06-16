import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export function Navbar() {
    const { user, login, logout } = useContext(AuthContext)

    return (
        <nav className="py-5 flex items-center justify-between">
            <ul>
                <li >
                    <Link className="px-2 py-2 bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-md" to="/">Home</Link>
                </li>
            </ul>
            {user ? (
                <button
                    className="px-2 py-2 bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-md"
                    onClick={logout}
                >
                    Logout
                </button>
            ) : (
                <button
                    className="px-2 py-2 bg-gray-100 text-gray-800 hover:bg-gray-200 rounded-md"
                    onClick={login}
                >
                    Login
                </button>
            )}

        </nav>
    )
}
