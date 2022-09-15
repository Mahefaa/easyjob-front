import {Link} from "react-router-dom";
import './index.modules.css'

const Navbar: React.FC = () => {
    return (
        <>
            <Link to={"/home/appliances"}>APPLIANCES</Link>
            <Link to={"/home/domains"}>DOMAINS</Link>
            <Link to={"/home/users"}>USERS</Link>
            <Link to={"/home/offers"}>OFFERS</Link>
        </>
    )
}
export default Navbar;