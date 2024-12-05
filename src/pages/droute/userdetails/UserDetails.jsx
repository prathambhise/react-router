import { useParams } from "react-router-dom"

function UserDetails() {

    // const params = useParams()
    // const userId = params.userId

    //          ||
    //      destructure
    //          ||

    const {userId} = useParams()

    return (
        <><h2>User Details for {userId}</h2></>
    )
}

export default UserDetails