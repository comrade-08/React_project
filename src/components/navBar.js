import '../css/navBar.css'
import { Link } from 'react-router-dom'



const NavBar = (props) => {
    return (
        <div className='navbar'>
            <nav>
                <ul>
                    <li><Link to="/"><button>Home</button></Link></li>
                    <li><Link to="/register"><button>Register</button></Link></li>
                    <li><Link to="/login"><button>Login</button></Link></li>
                    <li><Link to="/dashboard"><button>Dashboard</button></Link></li>
                </ul>
            </nav>
        </div>
    )
};

export default NavBar;