import Button  from "../UI/Button/Button"
const Navigation = ()=>{
    return (
        <nav className = "nav">
            <ul>
                <li>
                    <a href="/users">Users</a>
                </li>
                <li>
                <a href="/profile">Profile</a>
                </li>
                <li>
                <a href="/about-us">About Us</a>
                </li>
                <li>
                    <Button>Logout</Button>
                </li>
            </ul>
        </nav>
    )
}
export default Navigation