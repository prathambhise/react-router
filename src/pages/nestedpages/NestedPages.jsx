import { Link, Outlet } from "react-router-dom"

function NestedPages (){
    return(
        <>
        <h2>Nested Pages</h2>
        <p>If we comment index route tag in main.jsx,<br /> 
         element in it won't get auto displayed.'</p><br />
        <nav>
            <Link to='page-inside-1'>Page Inside 1</Link>
            <Link to='page-inside-2'>Page Inside 2</Link>
            <Link to='doesntexist'>Doesn't Exist</Link>
        </nav>
        <p>Above nested pages use relative links <br />
        meaning, the link doesn't start from '/'.</p>
        <Outlet />
        </>
    )
}

export default NestedPages
