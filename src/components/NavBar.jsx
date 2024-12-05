import { NavLink } from "react-router-dom"

function NavBar() {

    return (
        <>
            <nav className="primary-nav">
                {/* When using following use index.css file */}
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/nestedpages'>Nested Pages</NavLink>
                <NavLink to='/users'>Users</NavLink>
            </nav>
        </>
    )
}

export default NavBar
