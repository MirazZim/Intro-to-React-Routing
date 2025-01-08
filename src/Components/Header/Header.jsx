
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h3>This is header component</h3>
            <nav>
                <Link to = '/'>Home</Link>
                <Link to = '/about'>About</Link>
                <Link to = '/contact'>Contact Us</Link>
                <Link to = '/Users'> Users</Link>
                <Link to = '/posts'> Posts</Link>
                
                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact us</a> */}
            </nav>
            
        </div>
    );
};

export default Header;