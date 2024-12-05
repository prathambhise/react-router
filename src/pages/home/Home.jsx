import { useNavigate } from "react-router-dom"


function Home(){

    const navigate = useNavigate()
    return(
        <>
        <p>This is home page</p>
        <br /><br />
        <button onClick={() => navigate('/pagestack1')}>Page Stack Page 1</button>
        </>
    )
}

export default Home
