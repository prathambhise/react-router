import { NavLink } from "react-router-dom"

function NavBar() {

    // const NavLinkStyles = ({ isActive }) => {
    //     return {
    //         fontWeight: isActive ? 'bold' : 'normal',
    //         textDecoration: isActive ? 'none' : 'underline',
    //         color: isActive ? 'red' : 'blue'
    //     }
    // }

    return (
        <>
            <nav>
                {/* When using following use index.css file */}
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>


                {/* when using following use NavLinkStyles function and comment index.css */}
                {/* <NavLink style={NavLinkStyles} to='/'>Home</NavLink>
                <NavLink style={NavLinkStyles} to='/about'>About</NavLink> */}

            </nav>
        </>
    )
}

export default NavBar
