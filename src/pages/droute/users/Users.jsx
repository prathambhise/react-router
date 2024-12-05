import { useSearchParams } from "react-router-dom"

function Users() {

    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get('filter') === 'active'

    return (
        <>
        <h2>User List</h2>
        <div>
            <button onClick={()=>setSearchParams({filter:'active'})}>Active users</button>
            &emsp;
            <button onClick={()=>setSearchParams({})}>All Users</button>
            {showActiveUsers?(<h3>Showing active users</h3>):(<h3>Showing all users</h3>)}
        </div>
        </>
    )
}

export default Users
