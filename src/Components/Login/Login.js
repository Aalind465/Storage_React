import Card from "../UI/Card/Card"
import Button  from "../UI/Button/Button"
import "./Login.css"
const Login = ()=>{
    return (
        <Card className="login">
            <form>
                <div className="control">
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" name="email" id="email"></input>

                </div>
                <div className="control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"></input>
                </div>
                <div className="actions">
                    <Button type="submit">Login</Button>
                </div>
            </form>
        </Card>
    )
}
export default Login