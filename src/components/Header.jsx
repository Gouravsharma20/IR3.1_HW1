
import {NavLink} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = () => {
    return (
        <header className="bg-dark text-light">
        <div className="container py-4">
            <h1>My Food Delivery Website</h1>
        </div>

    <ul className="nav container py-4">
        <li className="nav-items"><NavLink className="nav-link" to={"/"}>Home</NavLink></li>
         <li className="nav-items"><NavLink className="nav-link" to={"/about"}>About</NavLink></li>
          <li className="nav-items"><NavLink className="nav-link" to={"/restaurants"}>Restraunts</NavLink></li>
    </ul>
    </header>
    )
    

}

export default Header