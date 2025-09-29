import './Header.css';

function Header(props) {
    return (
    <nav className="navbar navbar-dark bg-dark">
        <ul>
            <li>Home</li>
            <li>Info</li>
            <li>Schedule</li>
            <li>Contact</li>
        </ul>
    </nav>
    );
}

export default Header;