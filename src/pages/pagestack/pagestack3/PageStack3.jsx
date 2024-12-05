import { useNavigate } from "react-router-dom"
import PageStackInfo from "../pagestackinfo/PageStackInfo"

function PageStack3(){

    const navigate = useNavigate()

    return(
        <>
        <h2>Stack Page 3</h2>
        <PageStackInfo />
            <button onClick={() => navigate(-1)}>Previous Page</button>
        </>
    )
}

export default PageStack3
