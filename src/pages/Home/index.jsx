import { Link } from "react-router-dom";
import './home.css'

function Home() {
    return(
        <div className="container-home">
            <h1>Welcome!</h1>
            <Link to='/token-generator'>Let's get started!</Link>
        </div>
    )
}

export default Home;