import { useNavigate } from "react-router-dom"
import PageStackInfo from "../pagestackinfo/PageStackInfo"

function PageStack1() {

    const navigate = useNavigate()

    return (
        <>
            <h2>Stack Page 1</h2>
            <PageStackInfo />
            <button onClick={() => navigate('/pagestack2')}>Next Page</button><br /><br/>
            <button onClick={() => navigate(-1)}>Previous Page</button><br /><br />
            <p>Following button will not retain history for current page. <br />
                On 'Previous Page' you should see page before this and not this.</p>
            <button onClick={() => navigate('/pagestack3', { replace: true })}>Go To Page 3</button>
        </>
    )
}

export default PageStack1
