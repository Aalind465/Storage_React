import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import "./Home.css"
const Home = ()=>{
    return (
        <Card className="home">
            <h1>Welcome User</h1>
            <Button>Logout</Button>
        </Card>
    )
}
export default Home